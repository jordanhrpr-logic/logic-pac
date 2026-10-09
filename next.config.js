/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.logic-pac.com' }],
        destination: 'https://logic-pac.com/:path*',
        permanent: true,
      },
      {
        source: '/blog/packaging-finishes-guide-foil-uv-emboss',
        destination: '/guides/packaging-finish-guide',
        permanent: true,
      },
      {
        source: '/blog/packaging-brief-template-beauty-brands',
        destination: '/guides/packaging-brief-template',
        permanent: true,
      },
      {
        source: '/blog/refillable-beauty-packaging-guide',
        destination: '/guides/beauty-refillable-playbook',
        permanent: true,
      },
      // Legacy guide slug (renamed)
      {
        source: '/guides/sustainable-packaging-playbook',
        destination: '/guides/sustainable-beauty-packaging',
        permanent: true,
      },
      // Common legacy page patterns (no matching route on Pac)
      { source: '/about-us', destination: '/', permanent: true },
      { source: '/contact-us', destination: '/', permanent: true },
      { source: '/solutions', destination: '/capabilities', permanent: true },
      // French-language bot traffic
      { source: '/qualite', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
