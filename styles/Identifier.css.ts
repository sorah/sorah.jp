import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/fundamental.css";
import { responsiveStyle } from "./blog/functions";

export const styleIdentifier = style({});
globalStyle(`${styleIdentifier} svg`, {
  width: 22,
  height: 22,
  position: "relative",
  top: "0.30em",
  marginRight: "0.3em",
});

globalStyle(`${styleIdentifier} a`, {});

export const styleIdentifierList = style([
  {
    margin: 0,
    padding: 0,
  },
]);
globalStyle(`${styleIdentifierList} li`, {
  listStyle: "none",
  ...responsiveStyle({
    mobile: {
      marginBottom: "0.1em",
    },
  }),
});
globalStyle(`${styleIdentifierList} li a`, {
  color: themeVars.color.text,
  ...responsiveStyle({
    mobile: {
      display: "inline-block",
      paddingTop: "3px",
      paddingBottom: "3px",
      paddingRight: "10px",
    },
  }),
});
globalStyle(`${styleIdentifierList} li a:hover`, {
  color: themeVars.color.text,
});
export const styleIdentifierListBreak = style({ breakBefore: "column" });
