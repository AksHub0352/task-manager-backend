// routes/task.js
const express = require('express');
const router = express.Router();
const taskController = require('../controller/task');
const authenticateUser = require('../middleware');

router.use('/', authenticateUser)
router.post('/create', taskController.createTask);


router.get('/get', taskController.getTasks);


router.put('/update', taskController.updateTask);


router.delete('/delete/:taskId', taskController.deleteTask);

module.exports = router;
