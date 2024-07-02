const user = require('../models/user.js');
const express = require('express');
const router = express.Router();

const userController = {};

// Controlador para obtener todos los usuarios
userController.getUsers = async (req, res) => {
    res.send('Lista de usuarios');
};

//Controlador para agregar un usuario
userController.addUser = async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;
    const newUser = new user({ email, password });

    console.log(newUser);

    try {
        await newUser.save();
        res.status(200).send('Registro de nuevo usuario');
    } catch (error) {
        res.status(500).send('Error al registrar el usuario');
    }
};

// Definición de rutas
router.post('/registro', userController.addUser);
router.get('/usuarios', userController.getUsers);

module.exports = userController;
