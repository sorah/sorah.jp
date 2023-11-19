import { globalStyle, style } from "@vanilla-extract/css";
import {
  contentFontSizeMixin,
  contentWidthMixin,
  themeVars,
} from "./fundamental.css";
import { responsiveStyle } from "./functions";

export const styleEntry = style({
  paddingBottom: 20,
  marginBottom: 20,
});

export const styleEntryHeader = style({
  textAlign: "center",
  paddingTop: 14,
  paddingBottom: 14,
  marginBottom: 14,
});

export const styleEntryHeaderHeading = style([
  {
    fontFamily: themeVars.font.heading,
    border: "none",
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: "30px",
    lineHeight: "38px",
  },
  responsiveStyle({
    mobile: {
      paddingBottom: "9px",
    },
  }),
]);

export const styleEntryHeaderLink = style({
  color: themeVars.color.head,
  textDecoration: "none",
});
export const styleEntryHeaderTimestamp = style({
  display: "inline-block",
  borderTop: "2px solid",
  borderColor: themeVars.color.gray,
  fontSize: "18px",
});
export const styleEntryHeaderTitle = style({
  selectors: {
    [`${styleEntryHeaderLink}:hover &`]: {
      textDecoration: "underline",
      color: themeVars.color.linkHover,
    },
  },
});

export const styleEntryContent = style([
  contentWidthMixin,
  contentFontSizeMixin,
]);

globalStyle(
  `${styleEntryContent} h1, ${styleEntryContent} h2, ${styleEntryContent} h3, ${styleEntryContent} h4, ${styleEntryContent} h5, ${styleEntryContent} h6`,
  {
    fontFamily: themeVars.font.heading,
    fontWeight: "bold",
  }
);
globalStyle(`${styleEntryContent} h1, ${styleEntryContent} h2`, {
  borderBottom: "1px solid",
  borderColor: themeVars.color.gray,
  ...responsiveStyle({
    desktop: {
      marginLeft: `calc((${themeVars.size.contentWidth} - ${themeVars.size.outerWidth})/2)`,
      marginRight: `calc((${themeVars.size.contentWidth} - ${themeVars.size.outerWidth})/2)`,
      paddingLeft: `calc((${themeVars.size.outerWidth} - ${themeVars.size.contentWidth})/2)`,
      paddingRight: `calc((${themeVars.size.outerWidth} - ${themeVars.size.contentWidth})/2)`,
    },
  }),
});
globalStyle(`${styleEntryContent} h3, ${styleEntryContent} h4`, {
  paddingLeft: `calc(${themeVars.size.headerLrMargin} - 4px)`,
  marginLeft: `calc((${themeVars.size.headerLrMargin} * -1) - 4px)`,
});
globalStyle(`${styleEntryContent} h3`, {
  borderLeft: "4px solid",
  borderColor: themeVars.color.gray,
});
globalStyle(`${styleEntryContent} h4`, {
  borderLeft: "4px solid #eff2fa", // lighten($gray, 8%)
});

globalStyle(`${styleEntryContent} p`, {
  marginBottom: themeVars.size.contentLineHeight,
  wordBreak: "auto-phrase",
} as any);
globalStyle(`${styleEntryContent} li`, {
  wordBreak: "auto-phrase",
} as any);
globalStyle(
  `${styleEntryContent} p:lang(en), ${styleEntryContent} li:lang(en)`,
  {
    textWrap: "pretty",
  } as any
);

globalStyle(`${styleEntryContent} blockquote`, {
  marginTop: "10px",
  marginBottom: "10px",
  marginLeft: themeVars.size.headerLrMargin,
  paddingLeft: "10px",
  borderLeft: "3px solid",
  borderColor: themeVars.color.gray,
});
globalStyle(`${styleEntryContent} blockquote p`, {
  marginLeft: "10px",
  marginBottom: "12px",
});

globalStyle(`${styleEntryContent} > section`, {
  marginLeft: 0,
});
globalStyle(`${styleEntryContent} > ul, ${styleEntryContent} > ol`, {
  ...responsiveStyle({
    desktop: {
      padding: 0,
    },
  }),
});
globalStyle(`${styleEntryContent} > ul p, ${styleEntryContent} > ol p`, {
  marginTop: 5,
  marginBottom: 5,
  ...responsiveStyle({
    desktop: {
      padding: 0,
    },
  }),
});
globalStyle(
  `${styleEntryContent} > section > picture, ${styleEntryContent} .entry-image`,
  {
    textAlign: "center",
  }
);

globalStyle(
  `${styleEntryContent} > p > *:first-child:nth-last-child(1) > img, ${styleEntryContent} > p > img, ${styleEntryContent} > img, ${styleEntryContent} > picture img, ${styleEntryContent} .entry-image, ${styleEntryContent} .entry-image img`,
  {
    display: "block",
    textAlign: "center",
    maxWidth: themeVars.size.contentWidth,
    width: "auto",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    ...responsiveStyle({
      mobile: {
        transform: "none",
        maxWidth: "100%",
        margin: 0,
      },
    }),
  }
);

globalStyle(`${styleEntryContent} .entry-image-overflow`, {
  maxWidth: themeVars.size.imageWidth,
  marginLeft: `calc( (${themeVars.size.contentWidth} - ${themeVars.size.imageWidth}) / 2 )`,
  marginRight: `calc( (${themeVars.size.contentWidth} - ${themeVars.size.imageWidth}) / 2 )`,
  ...responsiveStyle({
    mobile: {
      maxWidth: "100%",
      margin: 0,
    },
  }),
});

globalStyle(`${styleEntryContent} pre`, {
  fontSize: "14px",
  lineHeight: "18px",
  maxWidth: "100%",
  whiteSpace: "break-spaces",
  padding: "12px 12px",
  border: "1px solid",
  borderColor: themeVars.color.gray,
});

export const styleEntryFooter = style([
  contentWidthMixin,
  {
    marginTop: "28px",
    color: themeVars.color.grayText,
    textAlign: "right",
  },
]);
