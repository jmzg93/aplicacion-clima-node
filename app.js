const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let cord = await lugar.getLugar(direccion);
        let temp = await clima.getTemp(cord.lat, cord.lng);
        return `El lugar ${cord.address} tiene una temperatura actual de ${temp.temp}ºC con una maxima de ${temp.tempMa}ºC y una minima de ${temp.tempMi}ºC`;
    } catch (err) {
        return `No se pudo obtener el clima en ${direccion}`;
    }


}

getInfo(argv.direccion).then(mensaje => {
        console.log(mensaje);
    })
    .catch(err => {
        console.log(err);
    });



// lugar.getLugar(argv.direccion)
//     .then(res => {
//         clima.getTemp(res.lat, res.lng).then(te => {

//             console.log(te);
//         }).catch(e => console.log(e))
//         console.log(res);
//     })
//     .catch(e => console.log(e));