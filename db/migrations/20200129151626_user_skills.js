
exports.up = function(knex) {
     return knex.schema.createTable("user_skills", function(user_skills_table) {
       user_skills_table
         .string("username")
         .references("users.username")
         .onDelete("CASCADE");
       user_skills_table.boolean("image_manipulation").defaultTo(false);
       user_skills_table.boolean("graphic_design").defaultTo(false);
       user_skills_table.boolean("video_editing").defaultTo(false);
       user_skills_table.boolean("audio").defaultTo(false);
       user_skills_table.boolean("ux").defaultTo(false);
       user_skills_table.boolean("project_management").defaultTo(false);
       user_skills_table.boolean("animation").defaultTo(false);
       user_skills_table.boolean("accessibility_specialist").defaultTo(false);
       user_skills_table.boolean("other").defaultTo(false);
     });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_skills')
};
