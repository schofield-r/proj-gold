exports.up = function(knex) {
  return knex.schema.createTable('comments', function(comments_table) {
    comments_table
      .integer('project_id')
      .references('projects.project_id')
      .notNullable();
    comments_table
      .increments('comment_id')
      .primary()
      .notNullable();
    comments_table
      .string('created_by')
      .references('users.username')
      .notNullable();
    comments_table.text('body').notNullable();
    comments_table
      .datetime('date_created')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
