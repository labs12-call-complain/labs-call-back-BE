
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', tbl => {
            
            tbl.increments('user_id');

            tbl.string('display_name', 128)
            .notNullable()
            
            tbl.string('email', 128)
            .notNullable()
            
            tbl.string('uid', 128)
            .notNullable()
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
