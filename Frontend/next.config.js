module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: `${process.env.CDN_HOST}`,
  },
}
