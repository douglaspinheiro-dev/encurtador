const crypto = require("crypto");

const randomize = function(max) {
    const randomBytes = crypto.randomBytes(2);
    const randomNum = randomBytes.readUInt8(0) * 256 + randomBytes.readUInt8(1);
    return randomNum % max;
}

const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'


module.exports = function(min, max) {
    // 1. Mínimo de 5 e máximo de 10 caracteres.
    const numberRandom =  Math.random() * (max - min) + min;

    let key = '';
    const charsLen = chars.length;
    for (var i=0; i<numberRandom; i++) {
        key += chars[randomize(charsLen)];
    }
    return key;
};