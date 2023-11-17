import { globalStyle, style } from "@vanilla-extract/css";
import { contentWidthMixin } from "./fundamental.css";
import { responsiveStyle } from "./functions";

export const styleHeader = style([
  contentWidthMixin,
  {
    display: "flex",
    justifyContent: "space-between",
  },
]);

const styleHeaderText = style({
  fontSize: "17px",
});

export const styleHeaderH1 = style([
  styleHeaderText,
  {
    border: "none",
    fontWeight: "600",
    padding: 0,
    margin: 0,
  },
]);

export const styleHeaderNav = style([
  styleHeaderText,
  {
    display: "flex",
  },
]);
globalStyle(`${styleHeaderNav} > div`, {
  marginLeft: "0.5em",
});

export const styleHeaderNavMobileHidden = style([
  responsiveStyle({
    mobile: {
      display: "none",
    },
  }),
]);

export const styleHeaderBrandLink = style({ textDecoration: "none" });
