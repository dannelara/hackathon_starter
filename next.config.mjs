/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {port: "https", hostname: "oaidalleapiprodscus.blob.core.windows.net"}
        ]
    }
};

export default nextConfig;
