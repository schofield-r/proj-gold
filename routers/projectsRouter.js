const projectsRouter = require("express").Router();
const {
  getAllProjects,
  getPitches,
  patchProject,
  deleteProject,
  getProjectsInProgress,
  getProjectsTesting,
  getProjectsCompleted,
  postCommentToProject
} = require("../controllers/projectsController");
// const { methodNotAllowed } = require("../errors/errors");

projectsRouter.route("/").get(getAllProjects);
// .all(methodNotAllowed);

projectsRouter.route("/pitches").get(getPitches);
// .all(methodNotAllowed);

//to update status
projectsRouter
  .route("/:project_id")
  .patch(patchProject)
  .delete(deleteProject);
// .all(methodNotAllowed);

projectsRouter.route("/in-progress").get(getProjectsInProgress);

projectsRouter.route("/testing").get(getProjectsTesting);

projectsRouter.route("/completed").get(getProjectsCompleted);

projectsRouter.route("/:project_id/comments").post(postCommentToProject);

module.exports = { projectsRouter };
