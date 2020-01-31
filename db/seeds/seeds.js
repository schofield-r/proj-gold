var _a = require('../data/index.js'), project_collaborators_data = _a.project_collaborators_data, tags_data = _a.tags_data, user_roles_data = _a.user_roles_data, comments_data = _a.comments_data, projects_data = _a.projects_data, user_data = _a.user_data, project_tags_data = _a.project_tags_data, user_preferences_data = _a.user_preferences_data, user_tags_data = _a.user_tags_data;
var formatDates = require('../utils/utils').formatDates;
exports.seed = function (knex) {
    return knex.migrate
        .rollback()
        .then(function () { return knex.migrate.latest(); })
        .then(function () {
        var user_roles_dataInsertions = knex('user_roles').insert(user_roles_data);
        var tags_dataInsertions = knex('tags').insert(tags_data);
        var user_dataInsertions = knex('users').insert(user_data);
        // const user_tags_dataInsertions = knex('user_tags').insert(user_tags_data);
        return Promise.all([
            user_roles_dataInsertions,
            tags_dataInsertions,
            user_dataInsertions
            // user_tags_dataInsertions
        ]);
    })
        .then(function () {
        var formattedProjectsData = formatDates(projects_data);
        return knex('projects')
            .insert(formattedProjectsData)
            .returning('*');
    })
        .then(function () {
        var user_tags_dataInsertions = knex('user_tags').insert(user_tags_data);
        var comments_dataInsertions = knex('comments').insert(comments_data);
        var project_tags_dataInsertions = knex('project_tags').insert(project_tags_data);
        var project_collaborators_dataInsertions = knex('project_collaborators').insert(project_collaborators_data);
        var user_preferences_dataInsertions = knex('user_preferences').insert(user_preferences_data);
        return Promise.all([
            user_tags_dataInsertions,
            comments_dataInsertions,
            project_tags_dataInsertions,
            project_collaborators_dataInsertions,
            user_preferences_dataInsertions
        ]);
    });
};
