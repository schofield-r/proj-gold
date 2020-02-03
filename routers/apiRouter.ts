const apiRouter = require("express").Router();
const { usersRouter } = require("./usersRouter");
const { projectsRouter } = require("./projectsRouter");
// const { methodNotAllowed } = require("../errors/errors");
// const { getAvailableEndpoints } = require("../controllers/apiController");

apiRouter.route("/");
// .get(getAvailableEndpoints)
// .all(methodNotAllowed);
apiRouter.use("/users", usersRouter);
apiRouter.use("/projects", projectsRouter);

module.exports = { apiRouter };
