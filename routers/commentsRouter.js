const commentsRouter = require('express').Router()

const {
  getCommentById,
  deleteCommentById
} = require('../controllers/commentsController');

commentsRouter
  .route('/:comment_id')
  .get(getCommentById)
  .delete(deleteCommentById);

module.exports = { commentsRouter };
