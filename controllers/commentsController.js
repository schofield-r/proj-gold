var _a = require('../models/commentsModel'), fetchCommentById = _a.fetchCommentById, removeCommentById = _a.removeCommentById;
exports.getCommentById = function (req, res, next) {
    var comment_id = req.params.comment_id;
    fetchCommentById(comment_id).then(function (comment) { return res.send(200).status(comment); });
};
exports.deleteCommentById = function (req, res, next) {
    var comment_id = req.params.comment_id;
    removeCommentById(comment_id).then(function (comment) {
        return res.status(204).send({ msg: 'comment deleted' });
    });
};
