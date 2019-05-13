exports.up = function(knex, Promise) {
    return knex.schema.createTable('form', tbl => {
        tbl.increments()
        tbl.string('DisplayName', 50).notNullable()
        tbl.string('Email', 50).notNullable()
        tbl.string('UID', 160).notNullable()
        tbl.string('StoreName', 50).notNullable()
        tbl.string('StoreLocation', 50).notNullable()
        tbl.string('StorePhoneNumber', 50).notNullable()
        tbl.integer('StoreGoogleRating', 50).notNullable()
        tbl.string('StoreWebsite', 128).notNullable()
        tbl.string('text', 128).notNullable()
        tbl.string('audioFile', 128).notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('form')
  };
  