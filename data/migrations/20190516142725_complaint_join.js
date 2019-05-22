
exports.up = function(knex, Promise) {
    return knex.schema.createTable('complaint', tbl => {
        tbl.increments('complaint_id');

        tbl.integer('user_key')
        .references("user_id")
        .inTable('user')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        
        tbl.integer('company_key')
        .references("company_id")
        .inTable('company')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl.integer('tweet_key')
        .references("tweet_id")
        .inTable('tweets')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl.integer('transcript_key')
        .references("transcript_id")
        .inTable('deepgram')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        
        tbl.integer('confirmation_key')
        .references("confirmation_id")
        .inTable('confirmation')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('complaint')
};
