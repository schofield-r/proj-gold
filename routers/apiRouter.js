const apiRouter = require("express").Router();
const { usersRouter } = require("./usersRouter");
const { projectsRouter } = require("./projectsRouter");
const { commentsRouter } = require("./commentsRouter");
// const { methodNotAllowed } = require("../errors/errors");
// const { getAvailableEndpoints } = require("../controllers/apiController");

// .get(getAvailableEndpoints)
// .all(methodNotAllowed);
apiRouter.use("/users", usersRouter);
apiRouter.use("/projects", projectsRouter);
apiRouter.use("/comments", commentsRouter);
apiRouter.route("/");
module.exports = apiRouter;
