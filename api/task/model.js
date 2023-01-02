// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll() {
     const result = []
     const tasks = await db('tasks as t')
          .leftJoin('projects as p', 'p.project_id', 't.project_id')
          .select(
               't.task_id',
               't.task_description',
               't.task_notes',
               't.task_completed',
               'p.project_name',
               'p.project_description'
          )

     tasks.forEach(task => {
          result.push({
               task_id: task.task_id,
               task_description: task.task_description,
               task_notes: task.task_notes,
               task_completed: task.task_completed ? true : false,
               project_name: task.project_name,
               project_description: task.project_description
          })
     })

     return result
}

async function getById(task_id) {
     const task = await db('tasks as t').where("task_id", task_id).first()



     return {
          task_id: task.task_id,
          task_description: task.task_description,
          task_notes: task.task_notes,
          task_completed: task.task_completed ? true : false,
          project_name: task.project_name,
          project_description: task.project_description
     }
}

function create(task) {
     return db('tasks').insert(task)
          .then(([task_id]) => {
               return getById(task_id)
          })
}


module.exports = { getAll, getById, create }