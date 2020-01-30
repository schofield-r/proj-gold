const {
  insertUser
  // updateArticle,
  // insertComment,
  // fetchComments,
  // fetchAllArticles
} = require("../models/articlesModel");


exports.postUser = (req, res, next) => {
  insertUser(req.params._id)
    .then(([article]) => res.status(200).send({ article: article }))
    .catch(next);
};

exports.getUser = (req, res, next) => {};

exports.patchUser = (req, res, next) => {};

exports.postTags = (req, res, next) => {};

exports.patchTags = (req, res, next) => {};
