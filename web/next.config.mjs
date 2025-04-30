/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["http://localhost:5001", "*.my-proxy.com"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '"**.logoipsum.com"',
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
