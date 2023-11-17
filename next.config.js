const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin({
  identifiers:
    process.env.NODE_ENV === "production"
      ? ({ filePath, packageName, hash, debugId }) => {
          const prefix = filePath
            .replace(/^.*styles\//, "")
            .replace(/\//g, "__")
            .replace(/\.css.*$/, "")
            .replace(/-|\s/g, "_")
            .replace(/fundamental/, "fl");
          //const did = debugId ? debugId.replace(/-|\s/g, "_") : "";
          return `v_${prefix}__${hash}`;
        }
      : "debug",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
  },
  reactStrictMode: true,
};

module.exports = withVanillaExtract(nextConfig);
