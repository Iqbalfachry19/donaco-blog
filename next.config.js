/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['donaco.vercel.app', 'cdn.sanity.io'],
  },
};
