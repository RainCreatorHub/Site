const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = withMDX(nextConfig)
