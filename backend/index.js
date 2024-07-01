const express = require('express');

//Creacion del servidor
const app = express();

//Definicion de ruta principal
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(4000, () => {
    console.log('El servidor esta corriendo!!');
});