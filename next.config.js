/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig
module.exports = {
  images: {
    domains: [
      "s2.coinmarketcap.com",
      "s3.coinmarketcap.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};
