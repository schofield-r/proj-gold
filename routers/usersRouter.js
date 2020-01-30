const usersRouter = require("express").Router();
const {
  postUser,
  getUser,
  patchUser,
  postTags,
  patchTags
} = require("../controllers/usersController");
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

module.exports = { usersRouter };
