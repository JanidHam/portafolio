const { createServer } = require('http')
const next = require('next')

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './src',
})
const handler = app.getRequestHandler()
const port = process.env.PORT || 3000

app.prepare().then(() => {
  createServer(handler).listen(port)
})
