

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./production.js').default;
} else {
  module.exports = require('./local.js').default;
}