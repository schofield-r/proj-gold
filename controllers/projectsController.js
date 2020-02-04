// import { create } from 'domain';
var _a = require('../models/projectsModel'), fetchAllProjects = _a.fetchAllProjects, fetchProjectById = _a.fetchProjectById, updateVotes = _a.updateVotes, removeProject = _a.removeProject, updateStatus = _a.updateStatus, updateToProject = _a.updateToProject, updateProjectTags = _a.updateProjectTags, addTagsToProjectTags = _a.addTagsToProjectTags, removeTagsFromProjectTags = _a.removeTagsFromProjectTags, fetchCommentsByProjectId = _a.fetchCommentsByProjectId, insertCommentToProjectId = _a.insertCommentToProjectId, addProjectCollaborator = _a.addProjectCollaborator;
exports.getAllProjects = function (req, res, next) {
    var _a = req.query, sort_by = _a.sort_by, order = _a.order, status = _a.status;
    fetchAllProjects(sort_by, order, status).then(function (projects) {
        return res.status(200).send(projects);
    });
};
exports.getProjectById = function (req, res, next) {
    var project_id = req.params.project_id;
    fetchProjectById(project_id).then(function (project) { return res.status(200).send(project); });
};
exports.deleteProject = function (req, res, next) {
    var project_id = req.params.project_id;
    removeProject(project_id).then(function (project) {
        return res.status(204).send({ msg: 'project deleted' });
    });
};
exports.patchVotes = function (req, res, next) {
    var project_id = req.params.project_id;
    var votes = req.body.votes;
    updateVotes(project_id, votes).then(function (project) { return res.status(200).send(project); });
};
exports.patchStatus = function (req, res, next) {
    var project_id = req.params.project_id;
    var status = req.body.status;
    updateStatus(status, project_id).then(function (project) {
        return res.status(200).send(project);
    });
};
exports.patchToProject = function (req, res, next) {
    var project_id = req.params.project_id;
    var _a = req.body, status = _a.status, project_leader = _a.project_leader, description = _a.description;
    updateToProject(project_id, status, project_leader, description).then(function (project) { return res.status(200).send({ project: project[0] }); });
};
exports.postTagsToProjectTags = function (req, res, next) {
    var project_id = req.params.project_id;
    var _a = req.body, tag_id = _a.tag_id, count = _a.count;
    addTagsToProjectTags(project_id, tag_id, count).then(function (projectTags) {
        return res.status(201).send(projectTags);
    });
};
exports.deleteTagsfromProjectTags = function (req, res, next) {
    var project_id = req.params.project_id;
    var tag_id = req.body.tag_id;
    removeTagsFromProjectTags(project_id, tag_id).then(function (projectTags) {
        return res.status(204).send({ msg: 'tag deleted' });
    });
};
exports.getCommentsByProjectId = function (req, res, next) {
    var project_id = req.params.project_id;
    console.log(project_id, 'in controller');
    fetchCommentsByProjectId(project_id).then(function (comments) {
        return res.status(200).send(comments);
    });
};
exports.postCommentByProjectId = function (req, res, next) {
    var project_id = req.params.project_id;
    var _a = req.body, body = _a.body, created_by = _a.created_by;
    insertCommentToProjectId(project_id, body, created_by).then(function (comment) {
        return res.status(201).send(comment);
    });
};
exports.patchProjectTags = function (req, res, next) {
    var project_id = req.params.project_id;
    var _a = req.body, tag_id = _a.tag_id, count = _a.count;
    updateProjectTags(project_id, tag_id, count).then(function (projectTag) {
        return res.status(200).send(projectTag);
    });
};
exports.postCollaborator = function (req, res, next) {
    var project_id = req.params.project_id;
    var _a = req.body, username = _a.username, tag_id = _a.tag_id;
    addProjectCollaborator(project_id, username, tag_id).then(function (collaborator) {
        res.status(201).send(collaborator);
    });
};
