const connection = require("../db/connection");

exports.insertUser = (user) => {}

exports.fetchUser = (username) => {
  return connection
    .select("*")
    .from("users")
    .where("users.username", username)
    .returning("*");
};

exports.updateUser = (user) => {}

exports.insertUserTags = (username, tags) => { }


