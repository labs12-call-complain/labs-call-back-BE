
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('company', tbl => {
            tbl.increments('company_id');

            tbl
            .string('name', 128)
            .notNullable();

            tbl
            .string('address', 128)
            
            tbl
            .string('phone', 128);
            

        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('company')
};
