// build your `Task` model here
function getAll() {
     return Promise.resolve('Getting all tasks works')
}

function getById(task_id) {
     return Promise.resolve(`Task with id of ${task_id} works`)
}


module.exports = { getAll, getById }