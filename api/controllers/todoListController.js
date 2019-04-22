
var mongoose = require('mongoose');
var Task = mongoose.model('Task');


// get All tasks
exports.all_tasks = (res,req) => {
    Task.find({}, (err,task) => {
        err ? res.send(err) : res.Json(task);
    });
}

// Create a task 
exports.create_task = (res,req) => {
    var new_task = new Task(req.body);
    new_task.save((err,task) => {
        err ? res.send(err) : res.Json(task);
    });
}

// read a task by id
exports.get_task = (res,req) => {
    Task.findById(req.params.taskId,(err,task) => {
        err ? res.send(err) : res.Json(task);
    });
}

exports.update_task = (res,req) => {
    Task.findOneAndUpdate({id: req.params.taskId}, req.body,{new: true} ,(err,task) => {
        err ? res.send(err) : res.Json(task);
    });
}

exports.delete_task = (res,req) => {
    Task.remove({id: req.params.id}, (err) => {
        err ? res.send(err) : res.Json({ message: 'Tasks deleted successfully' });
    });
}