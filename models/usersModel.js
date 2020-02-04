var connection = require('../db/connection');
exports.insertUser = function (username, first_name, surname, description, location, loc_radius, email, github, digest_opt_in) {
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
        .then(function (user) {
        return user;
    });
};
exports.fetchUser = function (username) {
    return connection
        .select('*')
        .from('users')
        .where('username', username)
        .returning('*')
        .then(function (user) {
        return { user: user[0] };
    });
};
exports.removeUser = function (username) {
    return connection('users')
        .where('username', '=', username)
        .del()
        .then(function (rows_deleted) {
        if (rows_deleted === 0)
            return Promise.reject({
                status: 404,
                msg: 'user not deleted'
            });
    });
};
exports.insertUserTags = function (username, tag_id) {
    console.log('in model');
    return connection('user_tags')
        .insert({ username: username, tag_id: tag_id })
        .returning('*')
        .then(function (tag) {
        return { tag: tag[0] };
    });
};
exports.removeTags = function (username, tag_id) {
    return connection("user_tags")
        .where({
        username: username,
        tag_id: tag_id
    })
        .del()
        .then(function (rows_deleted) {
        if (rows_deleted === 0)
            return Promise.reject({
                status: 404,
                msg: "tag not deleted"
            });
    });
};
exports.insertUserRole = function (username, role_id) {
    console.log(username, role_id);
    return connection("user_preferences")
        .insert({
        username: username,
        role_id: role_id
    })
        .returning("*")
        .then(function (userRole) {
        return { userRole: userRole[0] };
    });
};
exports.removeUserRole = function (username, role_id) {
    return connection("user_preferences")
        .where({ username: username, role_id: role_id })
        .del()
        .then(function (rows_deleted) {
        if (rows_deleted === 0)
            return Promise.reject({
                status: 404,
                msg: "preference not deleted"
            });
    });
};
