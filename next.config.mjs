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
    productionBrowserSourceMaps: true, // Enables source maps in production

};

export default nextConfig;
