import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "./fundamental.css";
import { responsiveStyle } from "./functions";

export const styleContainer = style([
  {
    width: themeVars.size.outerWidth,
    margin: "0px auto",
    textAlign: "left",
  },
  responsiveStyle({
    mobile: {
      width: themeVars.size.mainWidthMobile,
      wordWrap: "break-word",
    },
  }),
]);
