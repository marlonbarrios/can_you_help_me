/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev-only double mount can re-run layout effects and exaggerate theme/UI flicker.
  reactStrictMode: false,
}

module.exports = nextConfig
