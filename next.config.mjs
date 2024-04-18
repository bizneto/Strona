/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        port: "",
        pathname: "/maps/api/staticmap/**", // Adjust the pathname according to your image paths
      },
    ],
  },
};

export default nextConfig;
