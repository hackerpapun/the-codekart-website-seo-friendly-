/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["cdn.thecodekart.com"],
  },
};

export default nextConfig;
