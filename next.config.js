/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io', 'www.allrecipes.com'],
  },
};

module.exports = nextConfig;
