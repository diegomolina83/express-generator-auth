const cors = require('cors')

module.exports = app => {

  // Base URLS
  app.use(cors())
  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/',require('./users.routes'))
  app.use('/works',require('./works.routes'))
  app.use('/maps', require('./map.routes'))

}
