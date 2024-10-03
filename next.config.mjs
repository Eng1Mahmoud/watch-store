/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
    },
    {
      protocol: 'https',
      hostname: 'imgs.search.brave.com',
    },
  ],
},
    eslint: {
        ignoreDuringBuilds: true,
      },
      experimental: {
        serverActions: {
          bodySizeLimit: '10mb',
        },
      },
};

export default nextConfig;
