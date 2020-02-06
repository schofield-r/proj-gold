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

exports.insertCommentToProjectId = function(project_id, body, created_by) {
  return connection
    .into('comments')
    .insert({ project_id: project_id, body: body, created_by: created_by })
    .returning('*')
    .then(comment => {
      return {
        comment: comment[0]
      };
    });
};

exports.patchToProject = function(
  project_id,
  status,
  project_leader,
  description
) {
  return connection('projects')
    .where('project_id', '=', project_id)
    .update({
      status: status,
      project_leader: project_leader,
      description: description
    })
    .returning('*')
    .then(project => {
      return { project: project[0] };
    });
};

exports.addTagsToProjectTags = function(project_id, tag_id, count) {
  return connection('project_tags')
    .insert({
      tag_id: tag_id,
      project_id: project_id,
      count: count
    })
    .returning('*')
    .then(tag => {
      return { tag };
    });
};

exports.deleteTagsfromProjectTags = function(project_id, tag_id) {
  return connection('project_tags')
    .where({ project_id: project_id, tag_id: tag_id })
    .del()
    .then(rows_deleted => {
      if (rows_deleted === 0)
        return Promise.reject({
          status: 404,
          msg: 'tag not deleted'
        });
    });
};

const updateProjectTags = function(project_id, tag_id, count = 1) {
  return connection('project_tags')
    .where({ project_id: project_id, tag_id: tag_id })
    .decrement('count', count)
    .returning('*')
    .then(tag => {
      return { tag };
    });
};

exports.addProjectCollaborator = function(project_id, username, tag_id) {
  return connection('project_collaborators')
    .havingExists(function() {
      connection
        .select('*')
        .from('user_tags')
        .where({
          username: username,
          tag_id: tag_id
        });
    })
    .insert({ username: username, tag_id: tag_id })
    .returning('*')
    .then(collaborator => {
      if (collaborator) {
        return updateProjectTags(project_id, tag_id);
      }
    });
};

module.exports = { updateProjectTags };
