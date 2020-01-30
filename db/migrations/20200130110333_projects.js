exports.up = function(knex) {
  return knex.schema.createTable('projects', function(projects_table) {
    projects_table
      .increments('project_id')
      .primary()
      .notNullable();
    projects_table
      .string('created_by')
      .references('users.username')
      .notNullable();
    projects_table.string('project_leader').references('users.username');
    projects_table.timestamp('date_posted').defaultTo(knex.fn.now());
    projects_table
      .string('status')
      .defaultTo('pitch')
      .notNullable();
    projects_table.text('description').notNullable();
    projects_table
      .integer('votes')
      .defaultTo(0)
      .notNullable();
    projects_table.string('project_title').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};
