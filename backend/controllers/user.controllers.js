const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userController = {};

// Controlador para obtener todos los usuarios
userController.getUsers = async (req, res) => {
    res.send('Lista de usuarios');
};

// Controlador para ingreso
userController.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send("El correo no existe");
        }
        
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send("Clave incorrecta");
        }

        const token = jwt.sign({ _id: user._id }, 'secretKey');
        return res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el ingreso');
    }
};

// Controlador para registro
userController.registerUser = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 5);
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Controlador para ingreso (login)
userController.loginUserSimple = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.json({ error: 'Error en el usuario o contraseña' });
    }

    const eq = bcrypt.compareSync(req.body.password, user.password);
    if (!eq) {
        return res.json({ error: 'Error en el usuario o contraseña' });
    }

    res.json({ success: 'Login correcto!' });
};

userController.getTasks = async (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Tarea1',
            descripcion: 'Informacion tarea1'
        },
        {
            _id: 2,
            name: 'Tarea2',
            descripcion: 'Informacion tarea2'
        },
        {
            _id: 3,
            name: 'Tarea3',
            descripcion: 'Informacion tarea3'
        }
    ])
};

function verificarToken(req, res, next) {
    console.log(req.headers.authorization);
    if (!req.headers.authorization) {
        return res.status(401).send("No tiene autorización para continuar");
    }
    const token = req.headers.authorization.split(' ')[1];
    if (token == 'null') {
        return res.status(401).send("No existe token");
    }
    const payload = jwt.verify(token, 'secretkey');
    console.log(payload);
    req.userId = payload._id;
    next();
}

module.exports = userController;
