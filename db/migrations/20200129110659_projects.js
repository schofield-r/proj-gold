exports.up = function(knex) {
  return knex.schema.createTable("projects", function(projects_table) {
    projects_table
      .string("username")
      .references("user.username")
      .onDelete("CASCADE");
    projects_table
      .increment("project_id")
      .primary()
      .notNullable();
    projects_table.text("description");
    projects_table.timestamp("date_created").defaultTo(knex.fn.now());
    projects_table.string("title").notNullable();
    projects_table
      .string("status")
      .defaultTo("waiting for collaborators")
      .notNullable();
    projects_table
      .integer("votes")
      .defaultTo(0)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropable("projects");
};
