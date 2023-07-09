/** @type {import('next').NextConfig} */
const nextConfig = {
  cors: {
    origin: [
      "http://localhost:3000/",
      "https://marketplace-next-auth-stripe.vercel.app/",
    ],
    credentials: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
