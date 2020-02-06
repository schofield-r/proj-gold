const usersRouter = require('express').Router();
const {
  postUser,
  getUser,
  deleteUser,
  postTags,
  postUserRole,
  deleteUserRole,
  deleteTags,
  getProjectDigestById
} = require('../controllers/usersController');

usersRouter.route('/').post(postUser);

usersRouter
  .route('/:username/update_preferences')
  .post(postUserRole)
  .delete(deleteUserRole);

usersRouter
  .route('/:username')
  .get(getUser)
  .delete(deleteUser);

usersRouter
  .route('/:username/user_tags')
  .post(postTags)
  .delete(deleteTags);

usersRouter.route('/:username/project_digest').get(getProjectDigestById);

module.exports = { usersRouter };
