/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*', // Ensure all non-image requests are handled by Next.js
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3h46s6jorvpfj.cloudfront.net', // Allow images from CloudFront
      },
    ],
  },
};

export default nextConfig;
