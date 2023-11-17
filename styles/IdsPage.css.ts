import { assignVars, globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "./fundamental.css";
import { contentWidthMixin } from "./blog/fundamental.css";
import { styleContainer } from "./blog/container.css";

export const styleIdsAvatars = style({
  display: "flex",
});
globalStyle(`${styleIdsAvatars} > p`, { textAlign: "center" });

export const styleIdsIds = style({
  columns: 2,
});
globalStyle(`${styleIdsIds} > ul`, {});

globalStyle(`${styleIdsIds} a`, {
  color: themeVars.color.text,
});
globalStyle(`${styleIdsIds} a:hover`, {
  color: themeVars.color.link,
});
