/** @type {import('next').NextConfig} */
const nextConfig = {
  cors: {
    origin: [
      "http://localhost:3000/",
      "https://amazon-next-ts-auth-stripe-toolkit-kypclfodt-gabryelsoares.vercel.app/",
      "https://amazon-next-ts-auth-stripe-toolkit.vercel.app/",
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
