/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.youtube.com https://youtube.com; frame-ancestors 'self';"
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kepr.pl',
        port: '',
        pathname: '/client/img/**',
      },
      {
        protocol: 'https',
        hostname: 'kepr.pl',
        port: '',
        pathname: '/**', // For EspoCRM attachments
      },
      {
        protocol: 'https',
        hostname: 'www.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bizneto.programero.pl',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
