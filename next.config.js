const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
    reactStrictMode: true,
    i18n: {
      // The locales you want to support in your app
      locales: ["en", "fr"],
      // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
      defaultLocale: "en",
    },
  };

module.exports = withBundleAnalyzer(nextConfig); 
