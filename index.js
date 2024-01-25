
const express = require('express');
const authRoutes = require('./routes/auth');
const { connectDb } = require('./connection/mongodb');
const taskRoutes = require('./routes/task');
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
connectDb();

app.use('/auth', authRoutes);
app.use('/task', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
