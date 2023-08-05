const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user/list',userController.userList);
router.get('/user/detail',userController.studentDetails);



module.exports = router;