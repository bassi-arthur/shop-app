/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    loader: 'default',
    domains: ['files.stripe.com'],
  },
}

module.exports = nextConfig
