exports.up = function(knex) {
  return knex.schema.createTable('project_collaborators', function(
    project_collaborators_table
  ) {
    project_collaborators_table
      .integer("project_id")
      .references("projects.project_id")
      .onDelete("CASCADE")
      .notNullable();
    project_collaborators_table
      .string("username")
      .references("users.username")
      .onDelete("CASCADE")
      .notNullable();
    project_collaborators_table
      .integer("tag_id")
      .references("tags.tag_id")
      .onDelete("CASCADE")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('project_collaborators');
};
