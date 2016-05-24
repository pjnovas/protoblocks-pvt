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
  app: {
    title: 'ProtoBlocks',
    description: 'ProtoBlocks Desc.',
    head: {
      titleTemplate: 'ProtoBlocks: %s',
      meta: [
        {name: 'description', content: 'ProtoBlocks Desc.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'ProtoBlocks'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'ProtoBlocks'},
        {property: 'og:description', content: 'ProtoBlocks Desc.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@protoblocksar'},
        {property: 'og:creator', content: '@protoblocksar'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
