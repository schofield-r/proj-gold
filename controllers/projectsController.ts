import { create } from 'domain';

const {
  fetchAllProjects,
  fetchProjectById,
  updateVotes,
  removeProject,
  updateStatus,
  updateToProject,
  updateProjectTags,
  addTagsToProjectTags,
  removeTagsFromProjectTags,
  fetchCommentsByProjectId,
  insertCommentToProjectId,
  addProjectCollaborator
} = require('../models/projectsModel');

exports.getAllProjects = (req, res, next) => {
  const { sort_by, order, status } = req.query;
  fetchAllProjects(sort_by, order, status).then(projects =>
    res.status(200).send(projects)
  );
};

exports.getProjectById = (req, res, next) => {
  const { project_id } = req.params;
  fetchProjectById(project_id).then(project => res.status(200).send(project));
};

exports.deleteProject = (req, res, next) => {
  const { project_id } = req.params;
  removeProject(project_id).then(project =>
    res.status(204).send({ msg: 'project deleted' })
  );
};

exports.patchVotes = (req, res, next) => {
  const { project_id } = req.params;
  const { votes } = req.body;
  updateVotes(project_id, votes).then(project => res.status(200).send(project));
};

exports.patchStatus = (req, res, next) => {
  const { project_id } = req.params;
  const { status } = req.body;
  updateStatus(status, project_id).then(project =>
    res.status(200).send(project)
  );
};

exports.patchToProject = (req, res, next) => {
  const { project_id } = req.params;
  const { status, project_leader, description } = req.body;
  updateToProject(
    project_id,
    status,
    project_leader,
    description
  ).then(project => res.status(200).send(project));
};

exports.postTagsToProjectTags = (req, res, next) => {
  const { project_id } = req.params;
  const { tag_id, count } = req.body;
  addTagsToProjectTags(project_id, tag_id, count).then(projectTags =>
    res.status(201).send(projectTags)
  );
};

exports.deleteTagsfromProjectTags = (req, res, next) => {
  const { project_id } = req.params;
  const { tag_id } = req.body;
  removeTagsFromProjectTags(project_id, tag_id).then(projectTags =>
    res.status(204).send({ msg: 'tag deleted' })
  );
};

exports.getCommentsByProjectId = (req, res, next) => {
  const { project_id } = req.params;
  fetchCommentsByProjectId(project_id).then(comments =>
    res.status(200).send(comments)
  );
};

exports.postCommentByProject_Id = (req, res, next) => {
  const { project_id } = req.params;
  const { body, created_by } = req.body;
  insertCommentToProjectId(project_id, body, created_by).then(comment =>
    res.status(201).send(comment)
  );
};

exports.patchProjectTags = (req, res, next) => {
  const { project_id } = req.params;
  const { tag_id, count } = req.body;
  updateProjectTags(project_id, tag_id, count).then(projectTag =>
    res.status(200).send(projectTag)
  );
};

exports.postCollaborator = (req, res, next) => {
  const { project_id } = req.params;
  const { username, tag_id } = req.body;
  addProjectCollaborator(project_id, username, tag_id).then(collaborator => {
    res.status(201).send(collaborator);
  });
};