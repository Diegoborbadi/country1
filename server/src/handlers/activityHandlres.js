const getAllActivityHandler = (req,res) =>{
    res.status(200).send("aqui estan todos las actividades")
}

const crateNewActivityHandler = (req,res) =>{
    res.status(200).send("actividad creado")
}

module.exports = {
    getAllActivityHandler,
    getDetailActivityHandler,
    crateNewActivityHandler
}