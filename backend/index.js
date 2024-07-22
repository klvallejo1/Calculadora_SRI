const express = require('express');
const conectarDB = require('./database.js');
const cors = require('cors');

//Creacion del servidor
const app = express();

// Habilitar CORS
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

//Configurar rutas
app.use(require('./routes/server-routes.js'));

//Puerto
const PORT = process.env.PORT || 3000;

// Arrancar la app
app.listen(PORT, '0.0.0.0', () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});


/*
require('./database');

app.use(cors());
app.use(express.json());

app.use('/api-user', require('./routes/server-routes'));

app.listen('3000');
console.log('Server corriendo en el puerto', 3000);*/
