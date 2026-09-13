import { resolve, relative, sep } from "node:path";
import { createServer } from "vite";
import react from "@vitejs/plugin-react";
import { checkFile } from "../lib/content-files.mjs";

// Use the production component without changing the catalog or publishing.
const input = resolve(process.argv[2] ?? "");
if (!input.startsWith(resolve(".cache/drafts") + sep) || !input.endsWith(".json")) throw new Error("请提供 .cache/drafts 内的草稿 JSON");
const report = await checkFile(input);
if (report.edition.status !== "draft") throw new Error("预览只接受 draft");
// An unfinished selection must be readable before it meets publication quotas.
// Provenance, invalid dates, broken assets and malformed records still block it.
const selectionIssues = report.errors.filter(error => error === "当天内容不足 70%" || error.startsWith("有效独立图片 "));
const blocking = report.errors.filter(error => !selectionIssues.includes(error));
if (blocking.length) throw new Error(blocking.join("\n"));
console.log(JSON.stringify({editionDate:report.edition.editionDate, dates:report.counts, images:report.images, selectionIssues, warnings:report.warnings}, null, 2));
const entry = "\0digest-preview-entry";
const server = await createServer({
  configFile: false,
  base: "/daily-image-digest/",
  server: {host:"127.0.0.1", port:4320, strictPort:true, watch:{usePolling:true}},
  plugins: [react(), {
    name: "digest-draft-preview",
    resolveId(id) { if (id === "/virtual:digest-preview-entry") return entry; },
    load(id) {
      if (id !== entry) return;
      return `import React from 'react';
        import {createRoot} from 'react-dom/client';
        import Digest from '/app/digest.tsx';
        import '/app/globals.css';
        import edition from ${JSON.stringify("/" + relative(process.cwd(), input).split(sep).join("/"))};
        createRoot(document.getElementById('root')).render(React.createElement(Digest,{edition,previewIssues:${JSON.stringify(selectionIssues)}}));`;
    },
    configureServer(vite) {
      vite.middlewares.use(async (req, res, next) => {
        if (req.url?.split("?")[0] !== "/daily-image-digest/") return next();
        try {
          const html = await vite.transformIndexHtml(req.url, '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>每日图读 · 未发布草稿预览</title></head><body><div id="root"></div><script type="module" src="/virtual:digest-preview-entry"></script></body></html>');
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(html);
        } catch (error) { next(error); }
      });
    },
  }],
});
await server.listen();
server.printUrls();
