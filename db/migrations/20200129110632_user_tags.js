
exports.up = function(knex) {
  return knex.schema.createTable('user_tags', function(user_tag_table){
    user_tag_table.string('username').references('users.username').onDelete('CASCADE').notNullable()
    user_tag_table.boolean('')
  })
};

exports.down = function(knex) {
  
};
