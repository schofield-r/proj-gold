var usersRouter = require("express").Router();
var _a = require("../controllers/usersController"), postUser = _a.postUser, getUser = _a.getUser, patchUser = _a.patchUser, postTags = _a.postTags, patchTags = _a.patchTags;
// const { methodNotAllowed } = require("../errors/errors");
usersRouter.route("/").post(postUser);
// .all(methodNotAllowed);
usersRouter
    .route("/:username")
    .get(getUser)
    .patch(patchUser);
// .all(methodNotAllowed);
usersRouter
    .route("/:username/user_tags")
    .post(postTags)
    .patch(patchTags);
// .all(methodNotAllowed);
module.exports = { usersRouter: usersRouter };
