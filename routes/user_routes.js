const Router = require('express'); // Изменил на деструктурированное присваивание
const router = new Router();
const userController = require('../controller/user_controller');

router.post('/user', userController.createUser);
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user', userController.updateUser); // Заменил "update" на "put"
router.delete('/user/:id', userController.deleteUser);

module.exports = router; 
