
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('deepgram', tbl => {
            tbl.increments('transcript_id');

            tbl
            .text('transcript')
            .notNullable()

        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('deepgram')
};
