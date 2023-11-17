import { style } from "@vanilla-extract/css";
import { contentWidthMixin } from "./fundamental.css";

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
    textAlign: "right",
  },
]);

export const styleHeaderBrandLink = style({ textDecoration: "none" });
