var _a = require('../models/projectsModel'), fetchAllProjects = _a.fetchAllProjects, fetchAllPitches = _a.fetchAllPitches, updateProject = _a.updateProject, removeProject = _a.removeProject, fetchAllInProgress = _a.fetchAllInProgress, fetchAllTesting = _a.fetchAllTesting, fetchAllCompleted = _a.fetchAllCompleted, insertCommentToProject = _a.insertCommentToProject;
exports.getAllProjects = function (req, res, next) {
    var _a = req.query, sort_by = _a.sort_by, order = _a.order, status = _a.status;
    fetchAllProjects(sort_by, order, status).then(function (projects) {
        return res.status(200).send({ projects: projects });
    });
};
exports.getPitches = function (req, res, next) {
    fetchAllPitches().then(function (projects) { return res.status(200).send({ projects: projects }); });
};
exports.patchProject = function (req, res, next) {
    var _a = req.params, status = _a.status, project_id = _a.project_id, project_leader = _a.project_leader;
    var description = req.body.description;
    updateProject(status, project_id, project_leader, description).then(function (_a) {
        var project = _a[0];
        return res.state(200);
    });
};
exports.deleteProject = function (req, res, next) { };
exports.getProjectsInProgress = function (req, res, next) {
    fetchAllInProgress().then(function (projects) { return res.status(200).send({ projects: projects }); });
};
exports.getProjectsTesting = function (req, res, next) {
    fetchAllTesting().then(function (projects) { return res.status(200).send({ projects: projects }); });
};
exports.getProjectsCompleted = function (req, res, next) {
    var project_status = req.params.project_status;
    fetchAllCompleted(project_status).then(function (projects) {
        return res.status(200).send({ projects: projects });
    });
};
exports.postCommentToProject = function (req, res, next) {
    var project_id = req.params.project_id;
    var comment = req.body.comment;
    insertCommentToProject(comment, project_id).then(function (_a) {
        var comment = _a[0];
        return res.status(201).send({ comment: comment });
    });
};
