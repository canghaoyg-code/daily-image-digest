"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { parsePreferences } from "../lib/preferences.mjs";

type Theme = "light" | "dark";
type FontSize = "small" | "normal" | "large";
type ReadingWidth = "narrow" | "normal" | "wide";

const STORAGE_KEY = "morning-evening-reader";
let memoryValue = "";
function snapshot() {
  try { return window.localStorage.getItem(STORAGE_KEY) ?? memoryValue; } catch { return memoryValue; }
}
function subscribe(notify: () => void) {
  window.addEventListener("storage", notify);
  window.addEventListener("reader-preferences", notify);
  return () => { window.removeEventListener("storage", notify); window.removeEventListener("reader-preferences", notify); };
}
const serverSnapshot = () => "";
function savePreferences(value: string) {
  memoryValue = value;
  try { window.localStorage.setItem(STORAGE_KEY, value); } catch { /* Use memory when storage is unavailable. */ }
  window.dispatchEvent(new Event("reader-preferences"));
}

export default function ReaderControls() {
  const raw = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const { theme, fontSize, readingWidth, focusMode } = parsePreferences(raw);
  const [settingsOpen, setSettingsOpen] = useState(false);
  function change(update: object) {
    savePreferences(JSON.stringify({theme, fontSize, readingWidth, focusMode, ...update}));
  }
  const setTheme = (value: Theme) => change({theme:value});
  const setFontSize = (value: FontSize) => change({fontSize:value});
  const setReadingWidth = (value: ReadingWidth) => change({readingWidth:value});
  const setFocusMode = (value: boolean) => change({focusMode:value});

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-font-size", fontSize);
    root.setAttribute("data-reading-width", readingWidth);
    root.classList.toggle("focus-mode", focusMode);
  }, [theme, fontSize, readingWidth, focusMode]);

  return (
    <aside className="reader-toolbar" aria-label="阅读工具">
      <button
        type="button"
        title="切换日夜模式"
        aria-label={theme === "light" ? "切换到夜间模式" : "切换到日间模式"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "☾" : "☀"}
      </button>

      <div className="settings-wrap">
        <button
          type="button"
          title="阅读设置"
          aria-label="阅读设置"
          aria-expanded={settingsOpen}
          onClick={() => setSettingsOpen(!settingsOpen)}
        >
          阅
        </button>

        {settingsOpen && (
          <div className="settings-panel">
            <fieldset>
              <legend>字号</legend>
              <div className="segmented-control">
                {(["small", "normal", "large"] as FontSize[]).map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={fontSize === size ? "active" : ""}
                    onClick={() => setFontSize(size)}
                  >
                    {{ small: "小", normal: "中", large: "大" }[size]}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>版心</legend>
              <div className="segmented-control">
                {(["narrow", "normal", "wide"] as ReadingWidth[]).map((width) => (
                  <button
                    key={width}
                    type="button"
                    className={readingWidth === width ? "active" : ""}
                    onClick={() => setReadingWidth(width)}
                  >
                    {{ narrow: "窄", normal: "中", wide: "宽" }[width]}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        )}
      </div>

      <button
        type="button"
        title="专注阅读"
        aria-label={focusMode ? "退出专注阅读" : "进入专注阅读"}
        aria-pressed={focusMode}
        onClick={() => setFocusMode(!focusMode)}
      >
        清
      </button>
    </aside>
  );
}
