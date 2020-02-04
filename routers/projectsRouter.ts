const projectsRouter = require('express').Router();
const {
  getAllProjects,
  patchStatus,
  patchToProject,
  getProjectById,
  patchVote,
  deleteProject,
  postTagsToProjectTags,
  patchProjectTags,
  deleteTagsfromProjectTags,
  getCommentsByProjectId,
  postCommentByProjectId,
  postCollaborator
} = require('../controllers/projectsController');
// const { methodNotAllowed } = require("../errors/errors");

projectsRouter.route('/').get(getAllProjects);
// .all(methodNotAllowed);

//to update status
projectsRouter.route('./:project_id/status').patch(patchStatus);

projectsRouter.route('./:project_id/lead_project').patch(patchToProject);

projectsRouter.route('./;project_id/collaborate').post(postCollaborator);

projectsRouter
  .route('./:project_id/tags')
  .post(postTagsToProjectTags)
  .patch(patchProjectTags)
  .delete(deleteTagsfromProjectTags);

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
