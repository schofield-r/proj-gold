const commentsRouter = require('express');

const {
  getCommentById,
  deleteCommentById
} = require('../controllers/commentsController');

commentsRouter
  .route('/:comment_id')
  .get(getCommentById)
  .delete(deleteCommentById);

module.exports = { commentsRouter };
