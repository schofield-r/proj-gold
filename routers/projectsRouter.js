var projectsRouter = require('express').Router();
var _a = require('../controllers/projectsController'), getAllProjects = _a.getAllProjects, patchStatus = _a.patchStatus, getProjectById = _a.getProjectById, patchVote = _a.patchVote, deleteProject = _a.deleteProject, postCommentToProject = _a.postCommentToProject;
// const { methodNotAllowed } = require("../errors/errors");
projectsRouter.route('/').get(getAllProjects);
// .all(methodNotAllowed);
//to update status
projectsRouter.route('./:project_id/status').patch(patchStatus);
projectsRouter
    .route('/:project_id')
    .get(getProjectById)
    .patch(patchVote)["delete"](deleteProject);
// .all(methodNotAllowed);
projectsRouter.route('/:project_id/comments').post(postCommentToProject);
module.exports = { projectsRouter: projectsRouter };
