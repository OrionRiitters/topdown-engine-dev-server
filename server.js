const fastify = require('fastify')({ logger: {prettyPrint: true}})
const path = require('path')

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'static')
  })

fastify.register(require('./routes'), {
    root: path.join(__dirname, ''),
    prefix: '/'
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

function done() {
    return null
}

start()