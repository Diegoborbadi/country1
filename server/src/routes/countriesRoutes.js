const { Router } = require("express");
const {
getAllCountriesHandler,
crateNewCountryHandler} = require("../handlers/countriesHandlers")

const countriesRouter = Router(); 

countriesRouter.get("/",getAllCountriesHandler);
countriesRouter.post("/",crateNewCountryHandler);


module.exports = countriesRouter;
