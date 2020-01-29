exports.up = function(knex) {
  return knex.schema.createTable("users", function(usersTable) {
    usersTable
      .string("username")
      .primary()
      .notNullable();
    usersTable.string("first_name").notNullable();
    usersTable.string("surname").notNullable();
    usersTable.text('description')
    usersTable.string("location").defaultTo("not_supplied");
    usersTable.integer("loc_radius").defaultTo(0);
    usersTable.string("email").notNullable();
    usersTable.string("github");
    usersTable.boolean("digest_opt_in").defaultTo(false);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
