import type { NextConfig } from 'next';

const isProd = true;
const basePath = isProd ? '/IRS-Calculate_Inner_restlessnes_score' : '';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: basePath,
    // Add this to handle static assets in production
    assetPrefix: isProd
        ? 'https://wkdkavishka.github.io/IRS-Calculate_Inner_restlessnes_score/'
        : '',
    images: {
        unoptimized: true,
    },
    distDir: 'dist',
    trailingSlash: true,
    // Add this to handle static assets in production
    publicRuntimeConfig: {
        basePath: basePath,
    },
};

export default nextConfig;
