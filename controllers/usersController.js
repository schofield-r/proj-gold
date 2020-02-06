const {
  insertUser,
  fetchUser,
  updateUser,
  removeUser,
  insertUserTags,
  removeTags,
  insertUserRole,
  removeUserRole,
  fetchProjectDigestById
} = require('../models/usersModel');

exports.postUser = (req, res, next) => {
  const {
    username,
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
  ).then(user => res.status(201).send({ user: user[0] }));
};

exports.getUser = (req, res, next) => {
  const { username } = req.params;
  fetchUser(username).then(user => res.status(200).send(user));
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
  console.log('in controller');
  insertUserTags(username, tag_id).then(tags => res.status(201).send(tags));
};

exports.deleteTags = (req, res, next) => {
  const { username } = req.params;
  const { tag_id } = req.body;
  removeTags(username, tag_id).then(tag =>
    res.status(204).send({ msg: 'tag deleted' })
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
    res.status(204).send({ msg: 'user_role deleted' })
  );
};

exports.getProjectDigestById = (req, res, next) => {
  const { username } = req.params;
  console.log('sup');
  fetchProjectDigestById(username).then(digest => res.status(200).send(digest));
};
