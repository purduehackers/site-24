/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
    images: {
      domains: ['cdn.sanity.io', 'cdn.discordapp.com']
    }
}

export default nextConfig;
