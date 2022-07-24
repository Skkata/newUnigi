/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
//   sassOptions: {
//     includePaths: ['./src'],
//     prependData: `@import "~@styles/_mixins.sass"`,
// }
}

module.exports = nextConfig
