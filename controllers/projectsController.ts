const {
  fetchAllProjects,
  fetchProjectById,
  updateVotes,
  removeProject,
  updateStatus,
  insertCommentToProject
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

exports.getCommentsByProjectId = (req, res, next) => {
  const { project_id } = req.params;
  fetchCommentsByProjectId(project_id).then(comments => {
    res.status(200).send(comments);
  });
};

exports.postCommentByProject_Id = (req, res, next) => {
  const { project_id } = req.params;
  const { comment } = req.body;
  insertCommentToProject(comment, project_id).then(([comment]) =>
    res.status(201).send({ comment })
  );
};
