let items = require("../items")
const { v4: uuid } = require("uuid")

const getItems = (req, reply) => {
    reply.send(items)
}


const getItem = (request, reply) => {
    const { id } = request.params
    const item = items.find(item => item.id === id)
    reply.send(item)
}


const addItem = (request, reply) => {
    const { name } = request.body
    console.log("🚀 ~ addItem ~ name:", name)
    const item = {
        id: uuid(),
        name
    }

    items.push(item)
    reply.code(201).send(item)
}

const deleteItem = (req, rep) => {
    const { id } = req.params
    items = items.filter(item => item.id === id)
    rep.send({
        message: `Item ${id} has been removed!`
    })
}

module.exports = {
    getItem,
    getItems,
    addItem,
    deleteItem
}