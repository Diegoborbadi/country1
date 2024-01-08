const infoCleaner = (arr) => {
    if (Array.isArray(arr)) {
      return arr.map((country) => {
        return {
          name: country.name.common,
          img: country.flags.png,
          continent: country.continents[0], // El nombre del continente está en un array
          capital: country.capital,
          subregion: country.subregion,
          area: country.area,
          population: country.population,
          created: false
        };
      });
    } else {
      console.error("Input is not an array");
      return [];
    }
  };

module.exports = {
    infoCleaner
}