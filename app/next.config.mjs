/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Aktifkan App Router
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig