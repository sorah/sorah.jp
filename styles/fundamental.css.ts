import {
  createTheme,
  StyleRule,
  globalStyle,
  style,
} from "@vanilla-extract/css";

import { themeVars as blogThemeVars } from "@/styles/blog/fundamental.css";

export const themeVars = blogThemeVars;
export const theme = createTheme(blogThemeVars, {
  color: {
    base: "#538cfc", // rgb(83, 140, 252);
    text: "#111c32", // mix($base, #000, 20%);
    grayText: "#4e669b", // darken(mix($base, #EEE, 10%), 45%);
    head: "#325497", // mix($base, #000, 60%);
    gray: "#cfdaf1", // mix($base, #EEE, 20%);
    link: "#39507d", // mix($base, #282828, 40%);
    linkHover: "#4966a0", // lighten($link, 10%);
  },
  font: {
    heading:
      "'Source Sans 3', 'Source Sans Pro', var(--font-nextfont-source-sans-three), 'Helvetica Neue', 'Helvetica', 'Segoe UI', 'YuGothic', 'Yu Gothic', 'Noto Sans CJK JP', 'Noto Sans JP', sans-serif",
    content:
      "'Source Sans 3', 'Source Sans Pro', var(--font-nextfont-source-sans-three), 'Noto Sans CJK JP', 'Noto Sans JP', 'Helvetica Neue', 'Helvetica', 'Segoe UI', sans-serif",
    code: "'Source Code Pro', 'Monaco', 'Consolas', monospace",
  },
  size: {
    outerWidth: "1000px",
    imageWidth: "850px",
    contentWidth: "900px",
    mobileBreakpoint: "1000px", // outerWidth
    mainWidthMobile: "95%",
    contentWidthMobile: "100%",
    leftWidth: "12%",
    rightWidth: "85%",
    headerLrMargin: "20px",
  },
});
