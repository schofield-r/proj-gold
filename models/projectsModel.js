var connection = require('../db/connection');
exports.fetchAllProjects = function (sort_by, order, status) {
    return connection
        .select('*')
        .from('projects')
        .orderby(sort_by || 'votes', order || 'desc')
        .modify(function (query) {
        if (status)
            query.where('status', '=', status);
    })
        .then(function (projects) {
        return { projects: projects };
    });
};
exports.fetchProjectById = function (project_id) {
    return connection
        .select('*')
        .from('projects')
        .where('project_id', '=', project_id)
        .then(function (project) {
        return { project: project[0] };
    });
};
exports.removeProject = function (project_id) {
    return connection('projects')
        .where('project_id', '=', project_id)
        .del()
        .then(function (rows_deleted) {
        if (rows_deleted === 0)
            return Promise.reject({
                status: 404,
                msg: 'project not deleted'
            });
    });
};
exports.updateVotes = function (project_id, votes) {
    return connection
        .select('*')
        .from('projects')
        .where('project_id', '=', project_id)
        .increment('votes', votes)
        .returning('*')
        .then(function (project) {
        return { project: project[0] };
    });
};
exports.updateStatus = function (project_id, status) {
    return connection
        .select('*')
        .from('projects')
        .where('project_id', '=', project_id)
        .update('status', status)
        .returning('*')
        .then(function (project) {
        return { project: project[0] };
    });
};
exports.fetchCommentsByProjectId = function (project_id) {
    return connection
        .select('*')
        .from('comments')
        .where('project_id', '=', project_id)
        .then(function (comments) {
        return { comments: comments };
    });
};
exports.insertCommentToProjectId = function (project_id, body, created_by) {
    return connection
        .into('comments')
        .insert({ project_id: project_id, body: body, created_by: created_by })
        .returning('*')
        .then(function (comment) {
        return {
            comment: comment[0]
        };
    });
};
