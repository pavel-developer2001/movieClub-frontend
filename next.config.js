/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "static.hdrezka.sx",
      "api.remanga.org",
      "storage.yandexcloud.net",
      "res.cloudinary.com",
    ],
  },
}

module.exports = nextConfig
