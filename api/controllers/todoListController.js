
var mongoose = require('mongoose');
var Task = mongoose.model('tasks');


// get All tasks
exports.all_tasks = (req,res) => {
    
    Task.find({}, (err,task) => {
        err ? res.send(err) : res.json(task);
    });
}

// Create a task 
exports.create_task = (req,res) => {
    console.log(req.body);
    var new_task = new Task(req.body);
    new_task.save((err,task) => {
        err ? res.send(err) : res.json(task);
    });
}

// read a task by id
exports.get_task = (req,res) => {
    
    Task.findById(req.params.taskId,(err,task) => {
        err ? res.send(err) : res.json(task);
    });
}

exports.update_task = (req,res) => {
    Task.findOneAndUpdate({id: req.params.taskId}, req.body,{new: true} ,(err,task) => {
        err ? res.send(err) : res.json(task);
    });
}

exports.delete_task = (req,res) => {
    Task.remove({id: req.params.id}, (err) => {
        err ? res.send(err) : res.json({ message: 'Tasks deleted successfully' });
    });
}