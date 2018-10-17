const axios = require('axios');

const getTemp = async(lat, lng) => {
    let resultado = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9564bca900b087d6fd53a8abc2397589&units=metric&lang=es`);

    if (resultado.data.cod !== 200) {
        console.log(resultado.data);
        throw new Error('Error obteniendo temperaturas');
    }

    let temp = resultado.data.main.temp;
    let tempMi = resultado.data.main.temp_min;
    let tempMa = resultado.data.main.temp_max;

    return {
        temp,
        tempMi,
        tempMa
    }



}

module.exports = {
    getTemp
}