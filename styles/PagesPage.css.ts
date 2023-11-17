import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "@/styles/blog/functions";

export const styleFooterLi = style([
  responsiveStyle({
    mobile: {
      marginBottom: "8px",
      fontSize: "20px",
    },
  }),
]);
