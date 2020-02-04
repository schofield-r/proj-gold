var commentsRouter = require('express');
var _a = require('../controllers/commentsController'), getCommentById = _a.getCommentById, deleteCommentById = _a.deleteCommentById;
commentsRouter
    .route('/:comment_id')
    .get(getCommentById)["delete"](deleteCommentById);
module.exports = { commentsRouter: commentsRouter };
