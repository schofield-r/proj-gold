exports.up = function(knex) {
  return knex.schema.createTable('user_tags', function(user_tags_table) {
    user_tags_table
      .integer('tag_id')
      .references('tags.tag_id').onDelete('CASCADE')
      .notNullable();
    user_tags_table
      .string("username")
      .references("users.username")
      .onDelete("CASCADE")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_tags');
};