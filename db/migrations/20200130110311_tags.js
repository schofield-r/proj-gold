exports.up = function(knex) {
  return knex.schema.createTable('tags', function(tags_table) {
    tags_table
      .increments('tag_id')
      .primary()
      .notNullable();
    tags_table.string('tag_name').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tags');
};
