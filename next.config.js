/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/movies",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
