const {
  fetchCommentById,
  removeCommentById
} = require('../models/commentsModel');

exports.getCommentById = (req, res, next) => {
  const { comment_id } = req.params;
  fetchCommentById(comment_id).then(comment => res.status(200).send(comment));
};

exports.deleteCommentById = (req, res, next) => {
  const { comment_id } = req.params;
  removeCommentById(comment_id).then(comment =>
    res.status(204).send({ msg: 'comment deleted' })
  );
};
