"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
type FontSize = "small" | "normal" | "large";
type ReadingWidth = "narrow" | "normal" | "wide";

const STORAGE_KEY = "morning-evening-reader";

export default function ReaderControls() {
  const [theme, setTheme] = useState<Theme>("light");
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [readingWidth, setReadingWidth] = useState<ReadingWidth>("normal");
  const [focusMode, setFocusMode] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferencesLoaded, setPreferencesLoaded] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setPreferencesLoaded(true);
      return;
    }

    const preferences = JSON.parse(stored) as {
      theme?: Theme;
      fontSize?: FontSize;
      readingWidth?: ReadingWidth;
      focusMode?: boolean;
    };

    setTheme(preferences.theme ?? "light");
    setFontSize(preferences.fontSize ?? "normal");
    setReadingWidth(preferences.readingWidth ?? "normal");
    setFocusMode(preferences.focusMode ?? false);
    setPreferencesLoaded(true);
  }, []);

  useEffect(() => {
    if (!preferencesLoaded) return;

    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.fontSize = fontSize;
    root.dataset.readingWidth = readingWidth;
    root.classList.toggle("focus-mode", focusMode);
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ theme, fontSize, readingWidth, focusMode }),
    );
  }, [theme, fontSize, readingWidth, focusMode, preferencesLoaded]);

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
