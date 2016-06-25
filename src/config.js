require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  imagesBase: 'http://protoblocks.com.ar/images',
  gaUA: 'UA-79895810-1',
  app: {
    title: 'ProtoBlocks',
    description: 'Prototipos modulares, con el sistema de los módulos ProtoBlocks ahora podes tener tus prototipos ordenados.',
    head: {
      titleTemplate: '%s ProtoBlocks',
      meta: [
        {name: 'description', content: 'Prototipos modulares, con el sistema de los módulos ProtoBlocks ahora podes tener tus prototipos ordenados.'},
        {property: 'og:description', content: 'Prototipos modulares, con el sistema de los módulos ProtoBlocks ahora podes tener tus prototipos ordenados.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'ProtoBlocks'},
        {property: 'og:image', content: 'http://protoblocks.com.ar/logo.jpg'},
        {property: 'og:locale', content: 'es_AR'},
        {property: 'og:title', content: 'ProtoBlocks'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site_name', content: 'ProtoBlocks'},
        {property: 'og:creator', content: '@protoblocksar'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'},
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: '@ProtoBlocksAR'}
      ]
    }
  },
}, environment);
