/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio', // Removed the trailing slash
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
