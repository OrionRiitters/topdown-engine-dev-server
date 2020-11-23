const fastify = require('fastify')({ logger: true });
const path = require('path')

module.exports = async function (fastify, opts) {
    fastify.get('/', async (req, res) =>  {
        return { hello: 'static' }
    })
    fastify.get('/img', async (req, res) =>  {
        return { hello: 'img' }
    })
    
}