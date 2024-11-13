/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_HOSTNAME,
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["www.adventuresbyannemarie.com"],
  },
};

export default nextConfig;
