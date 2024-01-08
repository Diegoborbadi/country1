const { Router } = require("express");
const {
  getAllActivityHandler,
  getDetailActivityHandler,
  crateNewActivityHandler} = require("../handlers/activityHandlres")

const activityRouter = Router(); 

activityRouter.get("/",getAllActivityHandler);
activityRouter.get("/:id",getDetailActivityHandler);
activityRouter.post("/",crateNewActivityHandler);


module.exports = activityRouter;
