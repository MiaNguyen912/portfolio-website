/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['i.cloudup.com'], // List of allowed domains
        
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.cloudup.com', 
            },
        ]
    },
};

export default nextConfig;

