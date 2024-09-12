/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [320, 480, 640, 768, 1024, 1280, 1440, 1600, 1920],
        imageSizes: [64, 128, 256, 384, 512, 768, 1024],
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
