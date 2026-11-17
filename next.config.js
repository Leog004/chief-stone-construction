/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingExcludes: {
      // These pages check media at build time. Next serves public files separately.
      '/behind-the-build': ['public/**/*'],
      '/index': ['public/**/*']
    }
  },
  async redirects() {
    return [
      { source: '/history', destination: '/about#history', permanent: true },
      { source: '/leadership', destination: '/about#founder', permanent: true },
      { source: '/core-values', destination: '/about#core-values', permanent: true }
    ]
  }
}

module.exports = nextConfig
