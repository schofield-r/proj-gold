const connection = require("../db/connection");

exports.fetchAllProjects = () => {
  select("*").from("projects");
};

exports.fetchAllPitches = () => {
  select("*")
    .from("projects")
    .where("status", "pitch");
};

exports.updateProject = (status, project_id, project_leader, description) => {
  select("*")
    .from("projects")
    .where("project_id", project_id)
    .update({
      status: status,
      project_leader: project_leader,
      description: description
    });
};

exports.removeProject = () => {};

exports.fetchAllInProgress = () => {
  select("*")
    .from("projects")
    .where("projects.project_status", "in-progress");
};

exports.fetchAllTesting = () => {};

exports.fetchAllCompleted = () => {};

exports.insertCommentToProject = (comment, project_id) => {
  insert(comment)
    .into("projects")
    .where("projects.project_id", project_id);
};
