module.exports = app => {
    var TodoController = require('../controllers/todoListController');

    app.route('/tasks')
        .get(TodoController.all_tasks)
        .post(TodoController.create_task);

    app.route('/tasks/:taskId')
        .get(TodoController.get_task)
        .put(TodoController.update_task)
        .delete(TodoController.delete_task);
};