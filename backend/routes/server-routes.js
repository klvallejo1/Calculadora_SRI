const { Router } = require('express');
const router = Router();
const userController = require('../controllers/user.controllers');

router.get('/', userController.getUsers);
router.post('/ingreso', userController.loginUser);
router.get('/tareas', userController.getTasks);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUserSimple);

module.exports = router;
