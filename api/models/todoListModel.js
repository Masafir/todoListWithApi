// Define db Task schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creating our Task schema
var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter a name for your task',
    },
    Created_At: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['pending','ongoing','completed'],
        default: ['pending'],
    }
});

// export our model
module.exports = mongoose.model('Tasks',TaskSchema);