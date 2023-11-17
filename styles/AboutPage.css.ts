import { assignVars, globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "./fundamental.css";
import { contentWidthMixin } from "./blog/fundamental.css";
import { styleContainer } from "./blog/container.css";

export const styleAboutColumns = style({
  columns: 2,
});

globalStyle(`${styleAboutColumns} > section`, { breakInside: "avoid" });
