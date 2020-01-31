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
  const { project_status } = req.params;
  fetchAllPitches(project_status).then(projects =>
    res.status(200).send({ projects })
  );
};

exports.patchProject = (req, res, next) => {};

exports.deleteProject = (req, res, next) => {};

exports.getProjectsInProgress = (req, res, next) => {
  const { project_status } = req.params;
  fetchAllInProgress(project_status).then(projects =>
    res.status(200).send({ projects })
  );
};

exports.getProjectsTesting = (req, res, next) => {
  const { project_status } = req.params;
  fetchAllTesting(project_status).then(projects =>
    res.status(200).send({ projects })
  );
};

exports.getProjectsCompleted = (req, res, next) => {
  const { project_status } = req.params;
  fetchAllCompleted(project_status).then(projects =>
    res.status(200).send({ projects })
  );
};

exports.postCommentToProject = (req, res, next) => {
  const comment = req.body;
  insertCommentToProject([comment]).then(comment =>
    res.status(201).send({ comment })
  );
};
