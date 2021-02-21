const chai = require('chai');
const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos

const index = 'http://localhost:8081'; // Arquivo a ser testado

chai.use(http);
chai.use(subSet);

// O atributo do objeto será testado para verificar se ele existe
// O atributo recebe uma função, e ela deve retornar true para o teste passar
const urlSchema = {
    newUrl: newUrl => newUrl
};

describe('Testes de integração', () => {

    it('/encurtador - POST', () => {
        chai.request(index)
            .post('/encurtador')
            .send({
                url: 'http://wisereducacao.com'
            })
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(201);
                chai.expect(res.body).to.containSubset(urlSchema);
            });
    });

    it('/:url - GET', () => {
        chai.request(index)
            .get('/qyFVpe9')
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.redirectTo('http://wisereducacao.com/');
            });
    });

    it('/xyz - GET - 404', () => {
        chai.request(index)
            .get('/xyz')
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(404);
            });
    });
});