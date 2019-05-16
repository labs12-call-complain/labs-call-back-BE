
exports.up = function(knex, Promise) {
    return knex.schema.createTable('confirmation', tbl => {
        tbl.increments('confirmation_id');

        tbl.string('company_name', 128)
        .notNullable()
        .references('name')
        .inTable('company')

        tbl.text('transcript', 128)
        .notNullable()
        .references('transcript')
        .inTable('deepgram')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('confirmation')
};
