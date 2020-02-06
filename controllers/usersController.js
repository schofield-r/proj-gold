const {
  insertUser,
  fetchUser,
  updateUser,
  removeUser,
  insertUserTags,
  removeTags,
  insertUserRole,
  removeUserRole,
  fetchProjectDigestById,
  fetchSuggestedProjectsById,
  userTagId,
  usernamesFromTag,
  getProjectFromProjectTags
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
  fetchProjectDigestById(username).then(digest => res.status(200).send(digest));
};

exports.getSuggestedProjectsById = (req, res, next) => {
  const { username } = req.params;
  userTagId(username)
    .then(function(suggestions) {
      return Promise.all([
        usernamesFromTag(suggestions[0].tag_id),
        suggestions[0].tag_id
      ]);
    })
    .then(function([usernames, tag_id]) {
      // stage 2
      // input: input: tag_id
      // output: list of users -> convert into list of tags
      // check other users who have that tag -> return users
      const filtUsernames = usernames.filter(
        user => user.username !== username
      );

      return Promise.all(
        filtUsernames.map(username => userTagId(username.username, tag_id))
      );
    })
    .then(allTagsThatAreRelatedToOriginalTag => {
      //stage 3- > edit down tags removing original tag
      const flattededTags = allTagsThatAreRelatedToOriginalTag.flat();
      return Promise.all(
        flattededTags.map(suggestedProjects =>
          getProjectFromProjectTags(suggestedProjects.tag_id)
        )
      );
      // stage 4
      // input : list of tags
      // output: list of projects who have those tags
      // then get projects based on those tags
    })
    .then(a => {
      const b = a.flat();
      return res.status(200).send(b);
    });
};
