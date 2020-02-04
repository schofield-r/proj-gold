var usersRouter = require('express').Router();
var _a = require('../controllers/usersController'), postUser = _a.postUser, getUser = _a.getUser, deleteUser = _a.deleteUser, postTags = _a.postTags, postUserRole = _a.postUserRole, deleteUserRole = _a.deleteUserRole, deleteTags = _a.deleteTags;
// const { methodNotAllowed } = require("../errors/errors");
usersRouter.route('/').post(postUser);
// .all(methodNotAllowed);
usersRouter
    .route('/:username')
    .get(getUser)["delete"](deleteUser);
// .all(methodNotAllowed);
usersRouter('./:username/update_preferences')
    .post(postUserRole)["delete"](deleteUserRole);
usersRouter
    .route('/:username/user_tags')
    .post(postTags)["delete"](deleteTags);
// .all(methodNotAllowed);
module.exports = { usersRouter: usersRouter };
