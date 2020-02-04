const connection = require('../db/connection');

exports.insertUser = (
  username,
  first_name,
  surname,
  description,
  location,
  loc_radius,
  email,
  github,
  digest_opt_in
) => {
  return connection('users')
    .insert({
      username: username,
      first_name: first_name,
      surname: surname,
      description: description,
      location: location,
      loc_radius: loc_radius,
      email: email,
      github: github,
      digest_opt_in: digest_opt_in
    })
    .returning('*')
    .then(user => {
      return { user };
    });
};

exports.fetchUser = username => {
  return connection
    .select('*')
    .from('users')
    .where('username', username)
    .returning('*')
    .then(user => {
      return { user: user[0] };
    });
};

exports.removeUser = username => {
  return connection('users')
    .where('username', '=', username)
    .del()
    .then(rows_deleted => {
      if (rows_deleted === 0)
        return Promise.reject({
          status: 404,
          msg: 'user not deleted'
        });
    });
};

exports.insertUserTags = (username, tag_id) => {
  return connection('user_tags')
    .insert({ username: username, tag_id: tag_id })
    .returning('*')
    .then(tag => {
      return { tag };
    });
};

exports.deleteUserTags = (username, tag_id) => {
  return connection('user_preferences')
    .where({
      username: username,
      tag_id: tag_id
    })
    .del()
    .then(rows_deleted => {
      if (rows_deleted === 0)
        return Promise.reject({
          status: 404,
          msg: 'tag not deleted'
        });
    });
};

exports.insertUserPreferences = (username, role_id) => {
  return connection('user_preferences')
    .insert({
      username: username,
      role_id: role_id
    })
    .returning('*')
    .then(userRole => {
      return { userRole };
    });
};

exports.deleteUserPreferences = (username, role_id) => {
  return connection('user_preferences')
    .where({ username: username, role_id: role_id })
    .del()
    .then(rows_deleted => {
      if (rows_deleted === 0)
        return Promise.reject({
          status: 404,
          msg: 'preference not deleted'
        });
    });
};
