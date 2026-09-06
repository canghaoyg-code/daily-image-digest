export function parsePreferences(raw) {
  let value;
  try { value = JSON.parse(raw) ?? {}; } catch { value = {}; }
  return {
    theme: ["light", "dark"].includes(value.theme) ? value.theme : "light",
    fontSize: ["small", "normal", "large"].includes(value.fontSize) ? value.fontSize : "normal",
    readingWidth: ["narrow", "normal", "wide"].includes(value.readingWidth) ? value.readingWidth : "normal",
    focusMode: value.focusMode === true,
  };
}
