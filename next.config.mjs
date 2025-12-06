/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing configuration
  output: 'export', 
  
  // ADD THIS BLOCK to disable Image Optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig