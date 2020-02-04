const usersRouter = require('express').Router();
const {
  postUser,
  getUser,
  deleteUser,
  postTags,
  postUserRole,
  deleteUserRole,
  deleteTags
} = require('../controllers/usersController');

usersRouter.route('/').post(postUser);

usersRouter
  .route('/:username')
  .get(getUser)
  .delete(deleteUser);

usersRouter('./:username/update_preferences')
  .post(postUserRole)
  .delete(deleteUserRole);

usersRouter
  .route('/:username/user_tags')
  .post(postTags)
  .delete(deleteTags);

module.exports = { usersRouter };
