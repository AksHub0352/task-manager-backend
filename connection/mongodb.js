
const mongoose = require("mongoose");

exports.connectDb = async () => {
    try {
        const data = await mongoose.connect("mongodb+srv://aksapple1610:ak12345@cluster0.bhk934n.mongodb.net/task-manager");
        console.log("Connected to mongoDb");
    } catch (error) {
        console.log("An error occoured in connecting mongoDb", error);
    }
};
