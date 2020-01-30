const {
  project_collaborators,
  tags,
  user_roles,
  comments_data,
  projects_data,
  user_data
}= require('../data/index.js')

exports.seed = function(knex){
  return knex.migrate.rollback()
  .then(()=> knex.migrate.latest())
  .then(()=>{
const projectCollaboratorsInsertions = knex("project_collaborators").insert(
  project_collaborators
);

  })
}