
exports.up = function(knex) {
  return knex.schema.createTable('pitch_comments',function(pitch_comments_table){
    pitch_comments_table.increment('pitch_comment_id').primary().notNullable()
    pitch_comments_table.integer('pitch_id').references('pitches.pitch_id')
    pitch_comments_table.
  })
};

exports.down = function(knex) {
  
};
