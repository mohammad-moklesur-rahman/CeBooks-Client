/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configuration settings ...
  images: {
    // Add the list of domains you allow to serve images
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**", // Ensure the path is correct
      },
      // If you deploy to a real server later, you'd add:
      // {
      //   protocol: 'https',
      //   hostname: 'your-production-api-domain.com',
      // },

      {
        protocol: "https",
        hostname: "i.postimg.cc", // The exact hostname from your error
        port: "", // Leave blank unless a specific port is required
        pathname: "/**", // Allows any path on this domain
      },

      {
        protocol: "https",
        hostname: "img.clerk.com", // **NEW: Add this entry for Clerk images**
        port: "",
        pathname: "/**",
      },
      // Clerk sometimes uses a different image domain for production/dev
      // It's also safe to include images.clerk.dev (or images.clerk.com)
      {
        protocol: "https",
        hostname: "images.clerk.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.clerk.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
