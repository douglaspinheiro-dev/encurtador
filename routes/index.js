const index = require('../components/index/router')
const encurtador = require('../components/encurtador/router')

const rotas = [
    { caminho:'/', roteador: index },
    { caminho:'/encurtador', roteador: encurtador }
]

module.exports = rotas