const fastify = require('fastify')({ logger: true });
const path = require('path')

module.exports = async function (fastify, opts) {
    fastify.get('/', async (req, res) => {
        return { hello: 'routes' }
    })

    fastify.register(require('./static'), {
        root: path.join(__dirname, 'static'),
        prefix: '/static'
    })
}