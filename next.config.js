const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

module.exports = withMDX(config);
