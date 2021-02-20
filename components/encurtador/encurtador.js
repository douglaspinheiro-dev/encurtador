const dao = require('./dao')
const validate = require('validate.js')
const uuid = require('../uuidAlphanumeric')

const schema = {
    url: {
        url: {
            message: '',
            allowLocal: true,
            allowDataUrl: true
        }
    }
}
// a URL possui prazo de validade (você poderá escolher quanto tempo)
let expDay = new Date()
expDay.setDate(expDay.getDate() + 7)

class Encurtador {
    constructor(url) {
        this.id = null,
        this.url = url || null,
        this.newUrl = uuid(5,10),
        this.expiration = expDay
    }

    salvar () {
        let erros = validate(this, schema)
        if (erros){
            return Promise.reject({
                status:400,
                message: 'foram encontrados erros na validação',
                erros
            })
        }
        return dao.salvar(this)
            .then(() => `${process.env.url}/${this.newUrl}`)
    }

    selecionar (newUrl) {
        let erros = validate(this, schema)
        if (erros){
            return Promise.reject({
                status:400,
                message: 'foram encontrados erros na validação',
                erros
            })
        }
        return dao.selecionar(newUrl)
            .then(registros => {
                if (registros.length === 0) return null
                let url = registros[0]
                let today = new Date()
                let urlExpDay = new Date(url.expiration)
                let urlExpirada = today < urlExpDay
                if (urlExpirada) return Promise.reject({
                    status:400,
                    message: 'Url Expirada',
                    erros
                })
                return url
            })
    }

    getExpiration() {

    }
}

module.exports = Encurtador