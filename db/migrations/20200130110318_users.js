exports.up = function(knex) {
  return knex.schema.createTable("users", function(usersTable) {
    usersTable
      .string("username")
      .primary()
      .notNullable();
    usersTable.text("description").defaultTo("Tell us about yourself...");
    usersTable.string("location").defaultTo("not supplied");
    usersTable.integer("loc_radius").defaultTo(0);
    usersTable.string("email").notNullable();
    usersTable.string("github");
    usersTable.boolean("digest_opt_in").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
