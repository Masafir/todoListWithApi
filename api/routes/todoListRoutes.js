module.exports = app => {
    var TodoController = require('../controllers/todoListController');

    app.route('/tasks')
        .get(TodoController.all_Tasks)
        .post(TodoController.create_Task);

    app.route('/tasks/:taskId')
        .get(TodoController.get_Task)
        .put(TodoController.update_Task)
        .delete(TodoController.delete_Task);
};