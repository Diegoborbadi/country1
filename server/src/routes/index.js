const { Router } = require("express");
const countruiesRoutes = require("./countriesRoutes");
const activityRoutes = require("./activityRoutes")
const mainRouter = Router();

mainRouter.use("/countries",countruiesRoutes)
mainRouter.use("/activity",activityRoutes)

module.exports = mainRouter;
