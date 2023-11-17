import { assignVars, globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "./fundamental.css";
import { contentWidthMixin } from "./blog/fundamental.css";
import { styleContainer } from "./blog/container.css";
import { styleEntryContent } from "./blog/EntryView.css";
import { responsiveStyle } from "./blog/functions";

export const styleAboutColumns = style([
  {
    columns: 2,
  },
  responsiveStyle({
    mobile: {
      columns: 1,
    },
  }),
]);

globalStyle(`${styleAboutColumns} > section`, { breakInside: "avoid" });

export const styleAboutBioName = style({
  fontWeight: 700,
  fontSize: "42px",
  lineHeight: "44px",
  letterSpacing: "-1px",
  border: 0,
  borderBottom: 0,
  marginTop: "30px",
  marginBottom: "0px",

  padding: 0,
  selectors: {
    [`${styleEntryContent} &`]: {
      border: 0,
    },
  },
});

export const styleAboutListMargin = style({});
globalStyle(`${styleAboutListMargin} li`, {
  marginTop: "0.5em",
});
