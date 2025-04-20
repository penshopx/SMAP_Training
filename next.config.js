/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimasi gambar
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Optimasi untuk produksi
  swcMinify: true,
  // Konfigurasi untuk output
  output: 'standalone',
  // Konfigurasi untuk kompresi
  compress: true,
  // Konfigurasi untuk headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig