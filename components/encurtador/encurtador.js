const dao = require('./dao')
const validate = require('validate.js')
const uuid = require('../uuidAlphanumeric')
const dayjs = require('dayjs')
const schema = {
    url: {
        url: {
            message: '',
            allowLocal: true,
            allowDataUrl: true
        }
    },
    newUrl: {
        presence: true
    },

}

class Encurtador {
    constructor(url) {
        this.id = null,
        this.url = url || null,
        this.newUrl = uuid(5,10),
        this.expiration = dayjs().add(7, 'day')
        // a URL possui prazo de validade (você poderá escolher quanto tempo)
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
            .then(() => `${process.env.URL}/${this.newUrl}`)
    }

    selecionar (newUrl) {
        return dao.selecionar(newUrl)
            .then(registros => {
                if (registros.length === 0) return null
                let registro = registros[0]
                if (dayjs().isAfter(dayjs(registro.expiration))) return Promise.reject({
                    status:498,
                    message: 'Url Expirada',
                    erros
                })
                return registro.url
            })
    }

}

module.exports = Encurtador