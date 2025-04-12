/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/umami/script.js",
        destination: "https://cloud.umami.is/script.js",
      },
    ];
  },
};

module.exports = nextConfig;
