const {
  insertUser,
  fetchUser,
  updateUser,
  removeUser,
  insertUserTags,
  removeTags,
  insertUserRole,
  removeUserRole
} = require('../models/usersModel');

exports.postUser = (req, res, next) => {
  const { username } = req.params;
  const {
    first_name,
    surname,
    description,
    location,
    loc_radius,
    email,
    github,
    digest_opt_in
  } = req.body;
  insertUser(
    username,
    first_name,
    surname,
    description,
    location,
    loc_radius,
    email,
    github,
    digest_opt_in
  )
    .then(user => res.status(201).send(user))
    .catch(next);
};

exports.getUser = (req, res, next) => {
  const { username } = req.params;
  fetchUser(username)
    .then(user => res.status(200).send(user))
    .catch(next);
};

exports.deleteUser = (req, res, next) => {
  const { username } = req.params;
  removeUser(username).then(user =>
    res.status(204).send({ msg: 'user deleted' })
  );
};

exports.postTags = (req, res, next) => {
  const { username } = req.params;
  const { tag_id } = req.body;
  insertUserTags(username, tag_id)
    .then(tags => res.status(201).send(tags))
    .catch(next);
};

exports.deleteTags = (req, res, next) => {
  const { username } = req.params;
  const { tag_id } = req.body;
  removeTags(username, tag_id).then(tag =>
    res.send(204).send({ msg: 'tag deleted' })
  );
};

exports.postUserRole = (req, res, next) => {
  const { username } = req.params;
  const { role_id } = req.body;
  insertUserRole(username, role_id).then(role => res.status(201).send(role));
};

exports.deleteUserRole = (req, res, next) => {
  const { username } = req.params;
  const { role_id } = req.body;
  removeUserRole(username, role_id).then(role =>
    res.send(204).send({ msg: 'user_role deleted' })
  );
};
