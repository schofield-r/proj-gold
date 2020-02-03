const projectsRouter = require('express').Router();
const {
  getAllProjects,
  patchStatus,
  getProjectById,
  patchVote,
  deleteProject,
  getCommentsByProjectId,
  postCommentByProjectId
} = require('../controllers/projectsController');
// const { methodNotAllowed } = require("../errors/errors");

projectsRouter.route('/').get(getAllProjects);
// .all(methodNotAllowed);

//to update status
projectsRouter.route('./:project_id/status').patch(patchStatus);

projectsRouter
  .route('/:project_id')
  .get(getProjectById)
  .patch(patchVote)
  .delete(deleteProject);
// .all(methodNotAllowed);

projectsRouter
  .route('/:project_id/comments')
  .get(getCommentsByProjectId)
  .post(postCommentByProjectId);

module.exports = { projectsRouter };
