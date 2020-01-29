
exports.up = function(knex) {
     return knex.schema.createTable("user_type", function(user_type_table) {
       user_type_table
         .string("username")
         .references("users.username")
         .onDelete("CASCADE");
       user_type_table.boolean("pitcher").defaultTo(false);
       user_type_table.boolean("dev").defaultTo(false);
       user_type_table.boolean("creative").defaultTo(false);
       user_type_table.boolean("tester").defaultTo(false);
     });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user_type");
};
