import { assignVars, globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "./fundamental.css";
import { contentWidthMixin } from "./blog/fundamental.css";
import { styleContainer } from "./blog/container.css";

export const styleMainSection = style([
  {
    display: "flex",
    marginTop: "5vh",
    width: "100%",
    justifyContent: "center",
  },
]);

export const styleMainAvatar = style([
  {
    width: 220,
    height: 220,
    boxShadow: "0px 0 5px #aaa",
    marginRight: "1rem",
  },
]);

export const styleMainAvatarImg = style([
  {
    width: "100%",
    height: "100%",
  },
]);

export const styleMainAvatarName = style([
  {
    margin: 0,
    padding: 0,
    fontWeight: 700,
    fontSize: "42px",
    lineHeight: "44px",
  },
]);

export const styleMainContent = style({
  flexGrow: 1,
  maxWidth: "560px",
});

export const styleMainBio = style({
  margin: 0,
  marginTop: "0.3rem",
});

export const styleMainIds = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "0.2em",
  marginBottom: "0.2em",
});
globalStyle(`${styleMainIds} > ul`, {});
globalStyle(`${styleMainIds} a`, {
  textDecoration: "none",
});
globalStyle(`${styleMainIds} a:hover`, {
  textDecoration: "underline",
});

globalStyle(`${styleMainBio} a`, {
  color: themeVars.color.text,
});
globalStyle(`${styleMainBio} a:hover`, {
  color: themeVars.color.link,
});
