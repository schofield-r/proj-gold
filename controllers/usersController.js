const {
  insertUser,
  fetchUser,
  updateUser,
  insertUserTags
} = require("../models/usersModel");

exports.postUser = (req, res, next) => {
  insertUser(req.body)
    .then(([user]) => res.status(201).send({ user: user }))
    .catch(next);
};

exports.getUser = (req, res, next) => {
  fetchUser(req.params.user_id)
    .then(([user]) => res.status(200).send({ user: user }))
    .catch(next);
};

exports.patchUser = (req, res, next) => {
  const { user_id } = req.params;
  updateUser(user_id, req.body)
    .then(([user]) => res.status(200).send({ user }))
    .catch(next);
};

exports.postTags = (req, res, next) => {
   const { user_id } = req.params;

  insertUserTags(user_id, req.body)
    .then(tags => res.status(201).send({ tags: tags }))
    .catch(next);
};

exports.patchTags = (req, res, next) => {
    const { user_id } = req.params;
    updateUserTags(user_id, req.body)
      .then(([user]) => res.status(200).send({ user }))
      .catch(next);
};
