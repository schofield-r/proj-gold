exports.up = function(knex) {
  return knex.schema.createTable("pitches", function(pitches_table) {
    pitches_table
      .string("username")
      .references("user.username")
      .onDelete("CASCADE");
    pitches_table
      .increment("pitch_id")
      .primary()
      .notNullable();
    pitches_table.text("description");
    pitches_table.timestamp("date_posted").defaultTo(knex.fn.now());
    pitches_table.string("title").notNullable();
    pitches_table.integer('votes').defaultTo(0).notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pitches')
};
