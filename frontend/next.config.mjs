/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["127.0.0.1", "localhost", "bizneto.programero.pl"],
  },
};

export default nextConfig;
