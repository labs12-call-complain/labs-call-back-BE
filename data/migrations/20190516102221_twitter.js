
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('tweets', tbl => {

            tbl.increments('tweet_id');

            tbl.integer('twitter_id')
            
            tbl.text('tweet_text')

            tbl.string('entities', 128);

        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tweets')
};
