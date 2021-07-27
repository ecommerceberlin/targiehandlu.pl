
const path = require('path');
const withTM = require('next-transpile-modules')(['eventjuicer-site-components'], {resolveSymlinks: false});

  module.exports = withTM({


    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    
    webpack: (config, options) => {

      if (options.isServer) {
        config.externals = ['react', ...config.externals];
      }

      config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');


      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });

  
      return config
    },

    i18n: {
      locales: ['en','pl'],
      defaultLocale: 'pl',  
      // domains: [
      //   {
      //   domain: 'targiehandlu.pl',
      //   defaultLocale: 'pl',
      // },
      // {
      //   domain: 'ecommercewarsaw.com',
      //   defaultLocale: 'en',
      // }],
    },

    async rewrites() { 
      return [{
      source: '/presenters',
      destination: '/speakers',
      }]
    },

    async redirects() {
      return [{
          source: '/legal',
          destination: '/legal-20210714',
          permanent: false,
        }]
    }
  
  });