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
