const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  reactStrictMode: true,
  images: {
    loader: "custom",
    path: "/",
  },
});
