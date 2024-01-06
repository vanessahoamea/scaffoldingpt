/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './utils/loader.ts',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.prismic.io',
            },
            {
                protocol: 'https',
                hostname: 'prismic-io.s3.amazonaws.com'
            }
        ]
    },
}

module.exports = nextConfig
