
exports.up = function(knex) {
    return knex.schema.createTable('urls', table => {
        table.increments('id').primary()
        table.string('url')
        table.string('newUrl')
        table.datetime('expiration')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('urls')
};
