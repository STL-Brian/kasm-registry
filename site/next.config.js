/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'STLBrian',
    description: 'STLBrian custom workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://stlbrian.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
