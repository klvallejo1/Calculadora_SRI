const User = require('../models/user.js');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const userController = {};

// Controlador para obtener todos los usuarios
userController.getUsers = async (req, res) => {
    res.send('Lista de usuarios');
};

//Controlador para agregar un usuario
userController.addUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new User({ email, password });
        await newUser.save();
        const token = jwt.sign({ _id: newUser._id }, 'secretKey');
        res.status(200).json({ token });
        console.log(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar el usuario');
    }
};

// Controlador para ingreso
userController.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send("El correo no existe");
        }
        if (user.password !== password) {
            return res.status(401).send("Clave incorrecta");
        }

        const token = jwt.sign({ _id: user._id }, 'secretKey');
        return res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el ingreso');
    }
};

module.exports = userController;
