exports.up = function(knex) {
  return knex.schema.createTable('user_roles', function(user_roles_table) {
    user_roles_table
      .increments('id')
      .primary()
      .notNullable();
    user_roles_table.string('role_names').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_roles');
};
