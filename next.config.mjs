/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.pizzahut.io',
                port: '',
            },
        ],
    },


};

export default nextConfig;
