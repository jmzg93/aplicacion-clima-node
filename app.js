const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let encodedUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBDCJGPKdUMRxDVKLk_9pDqyURM8Q8KYmE`)
    .then(resul => {


        let res = resul.data.results[0];

        let address = res.formatted_address;
        let location = res.geometry.location;



        console.log(`La direccion ${address} tiene la siguiente latitud ${location.lat} y la siguiente latitud ${location.lng}`);

    })
    .catch(e => console.log('ERROOOOOOR'));