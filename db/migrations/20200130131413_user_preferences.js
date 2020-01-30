exports.up = function(knex) {
  return knex.schema.createTable('user_preferences', function(
    user_preference_table
  ) {
    user_preference_table
      .string('username')
      .references('users.username')
      .notNullable();
    user_preference_table
      .integer('role_id')
      .references('user_roles.id')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_preferences');
};
