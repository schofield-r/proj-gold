
exports.up = function(knex) {
   return knex.schema.createTable('user_langs', function(user_langs_table){
     user_langs_table.string('username').references('users.username').onDelete('CASCADE')
     user_langs_table.boolean('javascript').defaultTo(false)
     user_langs_table.boolean("python").defaultTo(false);
     user_langs_table.boolean("sql").defaultTo(false);
     user_langs_table.boolean("php").defaultTo(false);
     user_langs_table.boolean("java").defaultTo(false);
     user_langs_table.boolean("ruby").defaultTo(false);
     user_langs_table.boolean("c/c++").defaultTo(false);
     user_langs_table.boolean("swift").defaultTo(false);
     user_langs_table.boolean("other").defaultTo(false);
   })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_langs')
};
