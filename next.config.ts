// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ytimg.com", // Allow all subdomains of ytimg.com
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Allow images from Unsplash
      },
    ],
  },
};

module.exports = nextConfig;