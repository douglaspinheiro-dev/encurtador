var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')

const rotas = require('./routes/index')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

rotas.forEach(rota => app.use(rota.caminho, rota.roteador))


app.use(function(err, req, res, next) {
    console.log(err);
    if (err.status) {
        res.status(err.status).send(err)
    } else {

        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.send(err.message);
    }
})
module.exports = app;
