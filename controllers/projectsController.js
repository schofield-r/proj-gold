const {
  fetchAllProjects,
  fetchAllPitches,
  updateProject,
  removeProject,
  fetchAllInProgress,
  fetchAllTesting,
  fetchAllCompleted,
  insertCommentToProject
} = require("../models/projectsModel");

exports.getAllProjects = (req, res, next) => {
  // const { project_status } = req.params;
  fetchAllProjects().then(projects => res.status(200).send({ projects }));
};

exports.getPitches = (req, res, next) => {
  fetchAllPitches().then(projects => res.status(200).send({ projects }));
};

exports.patchProject = (req, res, next) => {
  const { status, project_id, project_leader } = req.params;
  const { description } = req.body;
  updateProject(
    status,
    project_id,
    project_leader,
    description
  ).then(([project]) => res.state(200));
};

exports.deleteProject = (req, res, next) => {};

exports.getProjectsInProgress = (req, res, next) => {
  fetchAllInProgress().then(projects => res.status(200).send({ projects }));
};

exports.getProjectsTesting = (req, res, next) => {
  fetchAllTesting().then(projects => res.status(200).send({ projects }));
};

exports.getProjectsCompleted = (req, res, next) => {
  const { project_status } = req.params;
  fetchAllCompleted(project_status).then(projects =>
    res.status(200).send({ projects })
  );
};

exports.postCommentToProject = (req, res, next) => {
  const { project_id } = req.params;
  const { comment } = req.body;
  insertCommentToProject(comment, project_id).then(([comment]) =>
    res.status(201).send({ comment })
  );
};
