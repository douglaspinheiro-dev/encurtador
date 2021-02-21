# Encurtador
Challenge Encurtador - Backend

## Instalação

> knex migrate:latest
>
> npm install
>
> npm start

## Testes

> npm run test


## Exemplo de uso

A URL retornada é salva no banco de dados e possui prazo de validade (7 dias)
e ao receber uma URL encurtada, será feito o redirecionamento para a URL salva no banco.

### Exemplo ao encurtar


O endpoint POST http://localhost:8081/encurtador salva a URL recebida no body: { url: "http://wisereducacao.com"; }
e retorna a URL encurtada: { url: "http://wisereducacao.com"; }


O sistema recebe uma chamada para encurtar a URL http://wisereducacao.com e retorna
o seguinte json: { newUrl: "http://localhost:8081/abc123ab"; }


### Exemplo ao redirecionar

Ao receber uma chamada para http://localhost:8081/abc123ab você irá receber um
redirecionamento para a URL salva no banco ( http://wisereducacao.com ), caso não seja
encontrada, sera retornado ao HTTP 404. Caso a data de expiração da URL salva no banco for menor que a data atual, sera retornado HTTP 498, com mensagem de "Url Expirada"

## Configuração para Desenvolvimento
Importe a collection da api para o POSTMAN,
> ./Encurtador.postman_collection.json

É necessário renomear o arquivo env.example para .env, e salvar as configuracoes do POSTGRES

Instale as dependencias
> npm i install

Execute as migrações do Banco, com o Knex
> knex migrate:latest

Inicie o Servidor
> npm start

## Autor

Douglas Pinheiro
> [email@douglaspinheiro.dev](email@douglaspinheiro.dev)
>
> [Linkedin](https://www.linkedin.com/in/douglaspinheiro/)

Distribuído sob a licença MIT. Veja LICENSE para mais informações.

[https://github.com/douglaspinheiro-dev](https://github.com/douglaspinheiro-dev)