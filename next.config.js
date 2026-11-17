/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/history', destination: '/about#history', permanent: true },
      { source: '/leadership', destination: '/about#founder', permanent: true },
      { source: '/core-values', destination: '/about#core-values', permanent: true }
    ]
  }
}

module.exports = nextConfig
