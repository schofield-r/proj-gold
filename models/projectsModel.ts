var connection = require('../db/connection');
exports.fetchAllProjects = function(sort_by, order, status) {
  return connection
    .select('*')
    .from('projects')
    .orderby(sort_by || 'votes', order || 'desc')
    .modify(query => {
      if (status) query.where('status', '=', status);
    })
    .then(projects => {
      return { projects };
    });
};

exports.fetchProjectById = function(project_id) {
  return connection
    .select('*')
    .from('projects')
    .where('project_id', '=', project_id)
    .then(project => {
      return { project: project[0] };
    });
};

exports.removeProject = function(project_id) {
  return connection('projects')
    .where('project_id', '=', project_id)
    .del()
    .then(rows_deleted => {
      if (rows_deleted === 0)
        return Promise.reject({
          status: 404,
          msg: 'project not deleted'
        });
    });
};

exports.updateVotes = function(project_id, votes) {
  return connection
    .select('*')
    .from('projects')
    .where('project_id', '=', project_id)
    .increment('votes', votes)
    .returning('*')
    .then(project => {
      return { project: project[0] };
    });
};

exports.updateStatus = function(project_id, status) {
  return connection
    .select('*')
    .from('projects')
    .where('project_id', '=', project_id)
    .update('status', status)
    .returning('*')
    .then(project => {
      return { project: project[0] };
    });
};

exports.fetchCommentsByProjectId = function(project_id) {
  return connection
    .select('*')
    .from('comments')
    .where('project_id', '=', project_id)
    .then(comments => {
      return { comments };
    });
};

// exports.insertCommentToProject = function (comment, project_id) {
//     insert(comment)
//         .into("projects")
//         .where("projects.project_id", project_id);
// };
