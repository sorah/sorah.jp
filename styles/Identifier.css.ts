import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/fundamental.css";

export const styleIdentifier = style({});
globalStyle(`${styleIdentifier} svg`, {
  width: 22,
  height: 22,
  position: "relative",
  top: "0.30em",
  marginRight: "0.3em",
});

globalStyle(`${styleIdentifier} a`, {});

export const styleIdentifierList = style({
  margin: 0,
  padding: 0,
});
globalStyle(`${styleIdentifierList} li`, {
  listStyle: "none",
});
globalStyle(`${styleIdentifierList} li a`, {
  color: themeVars.color.text,
});
globalStyle(`${styleIdentifierList} li a:hover`, {
  color: themeVars.color.text,
});
export const styleIdentifierListBreak = style({ breakBefore: "column" });
