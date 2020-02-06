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
      description: description,
      location: location,
      loc_radius: loc_radius,
      email: email,
      github: github,
      digest_opt_in: digest_opt_in
    })
    .returning('*')
    .then(user => {
      return user;
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
  console.log('in model');
  return connection('user_tags')
    .insert({ username: username, tag_id: tag_id })
    .returning('*')
    .then(tag => {
      return { tag: tag[0] };
    });
};

exports.removeTags = (username, tag_id) => {
  return connection('user_tags')
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

exports.insertUserRole = (username, role_id) => {
  console.log(username, role_id);
  return connection('user_preferences')
    .insert({
      username: username,
      role_id: role_id
    })
    .returning('*')
    .then(userRole => {
      return { userRole: userRole[0] };
    });
};

exports.removeUserRole = (username, role_id) => {
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

exports.fetchProjectDigestById = username => {
  return connection
    .select(
      'p.project_id',
      'u.tag_id',
      'a.tag_id',
      'a.project_id',
      'u.username',
      'a.tag_count'
    )
    .from('projects AS p')
    .join('project_tags AS a', 'p.project_id', 'a.project_id')
    .join('user_tags AS u', 'a.tag_id', 'u.tag_id')
    .where('u.username', '=', username)
    .where('a.tag_count', '>', 0)
    .returning('*')
    .then(projects => projects.map(project => project.project_id));
};

//stage 1
// input: username
// output : tag_id
//get the one tag for a user -> the one tag (id)

exports.userTagId = (username, excludeTag) => {
  return connection('user_tags')
    .select('tag_id')
    .where('username', '=', username)
    .then(tag_ids => {
      if (excludeTag) {
        return tag_ids.filter(({ tag_id }) => tag_id !== excludeTag);
      } else return tag_ids;
    });
};

exports.usernamesFromTag = tag_id => {
  return connection('user_tags')
    .select('username')
    .where('tag_id', '=', tag_id)
    .then(users => users);
};

exports.getProjectFromProjectTags = tag_id => {
  return connection('project_tags')
    .select('project_tags.project_id')
    .join('projects', 'projects.project_id', '=', 'project_tags.project_id')
    .where('project_tags.tag_id', '=', tag_id)
    .then(project_ids => {
      return project_ids;
    });
};
// exports.fetchSuggestedProjectsById = username => {
//   const subquery = connection('user_tags')
//     .select('tag_id')
//     .where('username', '=', username)
//     .returning('tag_id'); // all tags belonging to user
//   return (
//     connection('user_tags')
//       .whereExists(function() {
//         this.select('*')
//           .from('user_tags')
//           .where('user_tags.tag_id', '=', subquery);
//       })
//       // .andWhere('username', '!=', username)
//       // .select('user_tags.tag_id')
//       // .count('username')
//       // .groupBy('user_tags.tag_id')
//       // .having('user_tags.count', '>', 1)
//       .returning('*')
//       .then(suggestions => {
//         console.log(suggestions);
//       })
//   );
// };
