exports.up = function(knex) {
  return knex.schema.createTable('project_tags', function(project_tags_table) {
    project_tags_table
      .integer("tag_id")
      .references("tags.tag_id")
      .onDelete("CASCADE");
    project_tags_table
      .integer("project_id")
      .references("projects.project_id")
      .onDelete("CASCADE")
      .notNullable();
    project_tags_table
      .integer('tag_count')
      .defaultTo(0)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('project_tags');
};