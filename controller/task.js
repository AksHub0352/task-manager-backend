
const Task = require('../models/task');

const createTask = async (req, res) => {
    const { title, description, dueDate } = req.body;

    try {
        const task = new Task({ user: req.user.id, title, description, dueDate });
        await task.save();
        res.json({ message: 'Task created successfully', task });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

const getTasks = async (req, res) => {

    try {
        const tasks = await Task.find({ user: req.user.id }).exec();
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};


const updateTask = async (req, res) => {
    const { _id, title, description, dueDate } = req.body;
    const userId = req.user.id;

    try {
        const task = await Task.findOneAndUpdate(
            { _id: _id, user: userId },
            { title, description, dueDate },
            { new: true }
        );

        if (!task) {
            return res.status(403).json({ message: 'Unauthorized: Task not found or user does not have permission' });
        }

        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

const deleteTask = async (req, res) => {
    const { taskId } = req.params;
    const userId = req.user.id;

    try {
        const task = await Task.findOneAndDelete({ _id: taskId, user: userId });

        if (!task) {
            return res.status(403).json({ message: 'Unauthorized: Task not found or user does not have permission' });
        }

        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};



module.exports = { createTask, getTasks, updateTask, deleteTask };
