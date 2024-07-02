const { Router } = require('express');
const router = Router();
const user = require('../controllers/user.controllers');
const userController = require('../controllers/user.controllers');

router.get('/', user.getUsers);
router.post('/registro', user.addUser);
router.post('/ingreso', userController.loginUser);
router.get('/tareas', userController.getTasks);
 
module.exports = router;
