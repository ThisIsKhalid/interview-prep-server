const express = require('express');
const { postUser, getUsers, updateUser } = require('../controllers/usersController');
const router = express.Router();

router.get('/users', getUsers)
router.post('/users', postUser)
router.patch('/users', updateUser)

module.exports = router;