const Encurtador = require('./encurtador')

module.exports = {
    salvar: ({body}, res, next) => {
        const encurtador = new Encurtador(body.url)

        encurtador.salvar()
            .then(newUrl => res.json({ newUrl }))
            .catch(next)
    },

    selecionar: (req, res, next) => {
        const encurtador = new Encurtador()
        encurtador.selecionar(req.params.newUrl)
            .then(url => url ? res.redirect(url) : res.status(404).send())
            .catch(next)
    },
}