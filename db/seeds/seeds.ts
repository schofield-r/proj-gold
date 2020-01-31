const {
  project_collaborators_data,
  tags_data,
  user_roles_data,
  comments_data,
  projects_data,
  user_data,
  project_tags_data,
  user_preferences_data,
  user_tags_data
} = require('../data/index.js');

const { formatDates } = require('../utils/utils');

exports.seed = function(knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const user_roles_dataInsertions = knex('user_roles').insert(
        user_roles_data
      );
      const tags_dataInsertions = knex('tags').insert(tags_data);
      const user_dataInsertions = knex('users').insert(user_data);
      // const user_tags_dataInsertions = knex('user_tags').insert(user_tags_data);
      return Promise.all([
        user_roles_dataInsertions,
        tags_dataInsertions,
        user_dataInsertions
        // user_tags_dataInsertions
      ]);
    })
    .then(() => {
      const formattedProjectsData = formatDates(projects_data);
      return knex('projects')
        .insert(formattedProjectsData)
        .returning('*');
    })
    .then(() => {
      const user_tags_dataInsertions = knex('user_tags').insert(user_tags_data);
      const comments_dataInsertions = knex('comments').insert(comments_data);
      const project_tags_dataInsertions = knex('project_tags').insert(
        project_tags_data
      );
      const project_collaborators_dataInsertions = knex(
        'project_collaborators'
      ).insert(project_collaborators_data);
      const user_preferences_dataInsertions = knex('user_preferences').insert(
        user_preferences_data
      );
      return Promise.all([
        user_tags_dataInsertions,
        comments_dataInsertions,
        project_tags_dataInsertions,
        project_collaborators_dataInsertions,
        user_preferences_dataInsertions
      ]);
    });
};
