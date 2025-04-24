/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["cdn.thecodekart.com"],
  },
};

export default nextConfig;
