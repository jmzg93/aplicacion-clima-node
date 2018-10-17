const axios = require('axios');

const getLugar = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBDCJGPKdUMRxDVKLk_9pDqyURM8Q8KYmE`)

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la direccion ${direccion}`);
    }


    try {
        let res = respuesta.data.results[0];

        let address = res.formatted_address;
        let location = res.geometry.location;
        let lat = location.lat;
        let lng = location.lng;

        //  console.log(`La direccion ${address} tiene la siguiente latitud ${location.lat} y la siguiente latitud ${location.lng}`);

        return {
            address,
            lat,
            lng
        }



    } catch (err) {
        console.error('Error obteniendo resultados', err);

    }




}


module.exports = {
    getLugar
}