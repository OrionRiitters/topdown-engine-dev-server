const fastify = require('fastify')({ logger: true });
const path = require('path')
const fs = require('fs')
const fastifyStatic = require('fastify-static');

module.exports = async function (fastify, opts) {
    fastify.get('/', async (req, reply) =>  {
        return { hello: 'static' }
    })
    fastify.register(fastifyStatic, {
        root: '/static/img/'
    })
    fastify.get('/img', async (req, reply) => {
        const stream = fs.createReadStream(path.resolve(__dirname, '../../static/img/Propel.png'))
        reply.type('image/png').send(stream)
        return reply
    })
}