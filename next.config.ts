/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.unsplash.com",
      "media.istockphoto.com",
      "images.unsplash.com",
      
      
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig