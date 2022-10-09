/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://wknd-take-home-challenge-api.herokuapp.com/dbh6fghjgj.jpg",
      "https://wknd-take-home-challenge-api.herokuapp.com/lgmd6ielxi.jpg",
      "https://wknd-take-home-challenge-api.herokuapp.com/qlrl8c8xqg.jpg",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
