import {
  createTheme,
  StyleRule,
  globalStyle,
  style,
} from "@vanilla-extract/css";

import { responsiveStyle } from "./functions";

export const [theme, themeVars] = createTheme({
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
    outerWidth: "900px",
    imageWidth: "850px",
    contentWidth: "700px",
    mobileBreakpoint: "900px", // outerWidth
    mainWidthMobile: "95%",
    contentWidthMobile: "100%",
    leftWidth: "12%",
    rightWidth: "85%",
    headerLrMargin: "20px",

    contentFontSize: "18px",
    contentLineHeight: "calc(18px * 1.6)",
    contentFontSizeMobile: "16px",
    contentLineHeightMobile: "calc(16px * 1.6)",
  },
});

export const styleUseEnglishLineHeight = style({
  vars: {},
});

globalStyle("html", {
  scrollbarGutter: "stable",
});
globalStyle("body", {
  textAlign: "center",
  fontSize: "18px",
  fontFamily: themeVars.font.content,
  color: themeVars.color.text,
});
globalStyle(
  "body",
  responsiveStyle({
    mobile: {
      textAlign: "left",
      fontSize: "16px",
    },
  })
);

globalStyle("pre, code, pre *, code *", {
  fontFamily: themeVars.font.code,
});

globalStyle("a", {
  color: themeVars.color.link,
});

globalStyle("code", {
  padding: "4px 8px",
  backgroundColor: "#eff2fa", // lighten($gray, 8%)
  fontSize: "0.7em",
});
globalStyle("pre code", {
  padding: 0,
  backgroundColor: "transparent",
  fontSize: "inherit",
});

globalStyle("h1,h2,h3,h4,h5,h6", {
  color: themeVars.color.head,
  marginTop: "10px",
  marginBottom: "10px",
  padding: "5px 0",
  fontWeight: 400,
  fontFeatureSettings: '"palt"',
});

globalStyle("h1", { fontSize: "180%" });
globalStyle("h2", {
  marginTop: "50px",
  marginBottom: "30px",
  fontSize: "160%",
});
globalStyle("h3", { fontSize: "140%" });
globalStyle("h4", { fontSize: "120%" });
globalStyle("h5", { fontSize: "110%" });
globalStyle("h6", { fontSize: "110%" });

export const contentWidthMixin: StyleRule = {
  maxWidth: themeVars.size.contentWidth,
  width: themeVars.size.contentWidth,
  margin: "0 auto",
  ...responsiveStyle({
    mobile: {
      width: themeVars.size.contentWidthMobile,
      maxWidth: themeVars.size.contentWidthMobile,
    },
  }),
};

export const contentFontSizeMixin: StyleRule = {
  fontSize: themeVars.size.contentFontSize,
  lineHeight: themeVars.size.contentLineHeight,
  ...responsiveStyle({
    mobile: {
      fontSize: themeVars.size.contentFontSizeMobile,
      lineHeight: themeVars.size.contentLineHeightMobile,
    },
  }),
};
export const styleContentFontSize = style(contentFontSizeMixin);

export const styleRevisionMark = style({ display: "none" });
