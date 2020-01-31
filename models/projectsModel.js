const connection = require("../db/connection");

exports.fetchAllProjects = () => {
  select("*").from("projects");
};

exports.fetchAllPitches = () => {};

exports.updateProject = () => {};

exports.removeProject = () => {};

exports.fetchAllInProgress = () => {
  select("*")
    .from("projects")
    .where("projects.project_status", "in-progress");
};

exports.fetchAllTesting = () => {};

exports.fetchAllCompleted = () => {};

exports.insertCommentToProject = () => {};
