import { assignVars, globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "./fundamental.css";
import { contentWidthMixin } from "./blog/fundamental.css";
import { styleContainer } from "./blog/container.css";
import { responsiveStyle } from "./blog/functions";

export const styleMainSection = style([
  {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  responsiveStyle({
    desktop: {
      marginTop: "20vh",
    },
    mobile: {
      marginTop: "50px",
      flexDirection: "column",
      alignItems: "center",
    },
  }),
]);

export const styleMainAvatar = style([
  {
    width: 220,
    height: 220,
    boxShadow: "0px 0 5px #aaa",
  },
  responsiveStyle({
    desktop: {
      marginRight: "1rem",
    },
  }),
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
    letterSpacing: "-1px",
  },
  responsiveStyle({
    mobile: {
      textAlign: "center",
    },
  }),
]);

export const styleMainContent = style([
  {
    flexGrow: 1,
  },
  responsiveStyle({
    desktop: {
      maxWidth: "560px",
    },
    mobile: {
      marginTop: "1.5em",
    },
  }),
]);

export const styleMainBio = style([
  {
    margin: 0,
    marginTop: "0.3rem",
  },
  responsiveStyle({
    mobile: {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  }),
]);

export const styleMainIds = style([
  {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "0.2em",
    marginBottom: "0.2em",
  },
  responsiveStyle({
    mobile: {
      flexDirection: "column",
    },
  }),
]);
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

export const styleMainMore = style([
  {
    margin: 0,
    marginTop: "0.3rem",
    fontSize: "20px",
  },
  responsiveStyle({
    mobile: {
      marginTop: "1.2rem",
      fontSize: "24px",
    },
  }),
]);
