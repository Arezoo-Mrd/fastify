const fastify = require("fastify")({ logger: true });
const PORT = 8000

fastify.register(require('@fastify/swagger'), {
    swagger: {
        info: {
            title: 'Fastify swagger',
            description: 'Testing the Fastify swagger API',
            version: '0.1.0'
        },

    },

    exposeRoute: true,
    prefix: '/api'

})
fastify.register(require('./routes/items'))

const start = async () => {
    try {
        await fastify.listen({
            port: PORT
        })
        fastify.log.info(`server listening on ${PORT}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()