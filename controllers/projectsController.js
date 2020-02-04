"use strict";
exports.__esModule = true;
var _a = require('../models/projectsModel'), fetchAllProjects = _a.fetchAllProjects, fetchProjectById = _a.fetchProjectById, updateVotes = _a.updateVotes, removeProject = _a.removeProject, updateStatus = _a.updateStatus, fetchCommentsByProjectId = _a.fetchCommentsByProjectId, insertCommentToProjectId = _a.insertCommentToProjectId;
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
exports.getCommentsByProjectId = function (req, res, next) {
    var project_id = req.params.project_id;
    fetchCommentsByProjectId(project_id).then(function (comments) {
        return res.status(200).send(comments);
    });
};
exports.postCommentByProject_Id = function (req, res, next) {
    var _a = req.body, project_id = _a.project_id, body = _a.body, created_by = _a.created_by;
    insertCommentToProjectId(project_id, body, created_by).then(function (comment) {
        return res.status(201).send(comment);
    });
};
