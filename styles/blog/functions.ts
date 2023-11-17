import { StyleRule } from "@vanilla-extract/css";

export const responsiveStyle = ({
  mobile,
  desktop,
}: {
  mobile?: StyleRule;
  desktop?: StyleRule;
}) => {
  const retval: { "@media": { [key: string]: StyleRule } } = { "@media": {} };
  if (mobile) retval["@media"]["screen and (max-width: 1200px)"] = mobile;
  if (desktop) retval["@media"]["screen and (min-width: 1200px)"] = desktop;
  return retval;
};
