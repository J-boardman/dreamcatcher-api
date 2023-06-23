const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos'
      }
    ]
  }
}

module.exports = nextConfig
