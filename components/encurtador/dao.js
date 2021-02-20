const { select } = require('../../database/knex')
const db = require('../../database/knex')
const tabela = 'urls'
const dao = {
    salvar: ({
        url,
        expiration,
        newUrl
    }) => {
        return db(tabela)
            .insert({url, expiration, newUrl})
            .returning('id')
    },

    selecionar: newUrl => db(tabela)
        .select()
        .where({ newUrl })
}

module.exports = dao