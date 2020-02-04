var _a = require("../models/usersModel"), insertUser = _a.insertUser, fetchUser = _a.fetchUser, updateUser = _a.updateUser, removeUser = _a.removeUser, insertUserTags = _a.insertUserTags, removeTags = _a.removeTags, insertUserRole = _a.insertUserRole, removeUserRole = _a.removeUserRole;
exports.postUser = function (req, res, next) {
    var _a = req.body, username = _a.username, first_name = _a.first_name, surname = _a.surname, description = _a.description, location = _a.location, loc_radius = _a.loc_radius, email = _a.email, github = _a.github, digest_opt_in = _a.digest_opt_in;
    insertUser(username, first_name, surname, description, location, loc_radius, email, github, digest_opt_in).then(function (user) { return res.status(201).send({ user: user[0] }); });
};
exports.getUser = function (req, res, next) {
    var username = req.params.username;
    fetchUser(username).then(function (user) { return res.status(200).send(user); });
};
exports.deleteUser = function (req, res, next) {
    var username = req.params.username;
    removeUser(username).then(function (user) {
        return res.status(204).send({ msg: "user deleted" });
    });
};
exports.postTags = function (req, res, next) {
    var username = req.params.username;
    var tag_id = req.body.tag_id;
    console.log("in controller");
    insertUserTags(username, tag_id).then(function (tags) { return res.status(201).send(tags); });
};
exports.deleteTags = function (req, res, next) {
    var username = req.params.username;
    var tag_id = req.body.tag_id;
    removeTags(username, tag_id).then(function (tag) {
        return res.status(204).send({ msg: "tag deleted" });
    });
};
exports.postUserRole = function (req, res, next) {
    var username = req.params.username;
    var role_id = req.body.role_id;
    insertUserRole(username, role_id).then(function (role) { return res.status(201).send(role); });
};
exports.deleteUserRole = function (req, res, next) {
    var username = req.params.username;
    var role_id = req.body.role_id;
    removeUserRole(username, role_id).then(function (role) {
        return res.status(204).send({ msg: "user_role deleted" });
    });
};
