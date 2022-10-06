const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    activity: {
        type: String,
        required: "Activity is required",
    },
    completed: {
        type: Boolean,
    }
});

module.exports = mongoose.model("Todo", todoSchema);