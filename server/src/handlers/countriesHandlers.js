const { createCountryDB,getDetailCountryByIdDB } = require("../controllers/countriesControllers");

const getAllCountriesHandler = async (req,res) =>{
    try {
        const response = await getDetailCountryByIdDB()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



const crateNewCountryHandler = async (req,res) =>{
    const {name,img,continent,capital,subregion,area,population} = req.body;
    try {
        const response = await createCountryDB(name,img,continent,capital,subregion,area,population)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllCountriesHandler,
    crateNewCountryHandler
}