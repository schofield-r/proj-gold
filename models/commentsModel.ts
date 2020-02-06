var connection = require('../db/connection');

exports.fetchCommentById = function(comment_id) {
  return connection
    .select('*')
    .from('comments')
    .where('comment_id', '=', comment_id)
    .then(comment => {
      return { comment: comment[0] };
    });
};

exports.removeCommentById = function(comment_id) {
  return connection('comments')
    .where('comment_id', '=', comment_id)
    .del()
    .then(rows_deleted => {
      if (rows_deleted === 0)
        return Promise.reject({
          status: 404,
          msg: 'comment not deleted'
        });
    });
};
