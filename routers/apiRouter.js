var apiRouter = require("express").Router();
var usersRouter = require("./usersRouter").usersRouter;
var projectsRouter = require("./projectsRouter").projectsRouter;
// const { methodNotAllowed } = require("../errors/errors");
// const { getAvailableEndpoints } = require("../controllers/apiController");
apiRouter.route("/");
// .get(getAvailableEndpoints)
// .all(methodNotAllowed);
apiRouter.use("/users", usersRouter);
apiRouter.use("/projects", projectsRouter);
module.exports = { apiRouter: apiRouter };
