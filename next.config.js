// @ts-checkrt
/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fondation.boussoledafrique.cd",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
    ],
  },
};

module.exports = config;
