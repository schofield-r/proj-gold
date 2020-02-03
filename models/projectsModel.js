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
// exports.updateProject = function (status, project_id, project_leader, description) {
//     select("*")
//         .from("projects")
//         .where("project_id", project_id)
//         .update({
//         status: status,
//         project_leader: project_leader,
//         description: description
//     });
// };
// exports.fetchAllInProgress = function () {
//     select("*")
//         .from("projects")
//         .where("projects.project_status", "in-progress");
// };
// exports.insertCommentToProject = function (comment, project_id) {
//     insert(comment)
//         .into("projects")
//         .where("projects.project_id", project_id);
// };
