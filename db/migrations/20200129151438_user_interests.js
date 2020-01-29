
exports.up = function(knex) {
     return knex.schema.createTable("user_interests", function(user_interests_table) {
       user_interests_table
         .string("username")
         .references("users.username")
         .onDelete("CASCADE");
       user_interests_table.boolean("vision_impairment").defaultTo(false);
       user_interests_table.boolean("deaf_or_hard_of_hearing").defaultTo(false);
       user_interests_table.boolean("mental_health_conditions").defaultTo(false);
       user_interests_table.boolean("cognitive_disability").defaultTo(false);
       user_interests_table.boolean("aquired_brain_injury").defaultTo(false);
       user_interests_table.boolean("autism_spectrum_disorder").defaultTo(false);
       user_interests_table.boolean("physical_disability").defaultTo(false);
       user_interests_table.boolean("for_care_givers").defaultTo(false);
       user_interests_table.boolean("other").defaultTo(false);
     });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user_interest");
};
