const Router = require('express'); // Изменил на деструктурированное присваивание
const router = new Router();
const postController = require('../controller/post_controller');

router.post('/post', postController.createPost);
router.get('/post', postController.getPostByUser);


module.exports = router; 
