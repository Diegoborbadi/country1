const axios = require('axios');
const {Country} = require("../db")
const {infoCleaner} = require("../utils/index")


const createCountryDB = async (name,img,continent,capital,subregion,area,population) => {
    return await Country.create(name,img,continent,capital,subregion,area,population)
}


const getDetailCountryByIdDB = async () => {
  const countryDB = await Country.findAll();

  try {
    const response = await axios.get("http://localhost:5000/countries/");
    const infoApi = response.data; // Accediendo a la propiedad 'data' de la respuesta de axios
    const countryApi = infoCleaner(infoApi);
    return [...countryDB, ...countryApi];
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return countryDB;
  }
};







module.exports = {createCountryDB,getDetailCountryByIdDB}