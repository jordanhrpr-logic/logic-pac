/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.logic-pac.com' }],
        destination: 'https://logic-pac.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
