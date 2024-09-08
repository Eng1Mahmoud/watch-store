/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
    }
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
