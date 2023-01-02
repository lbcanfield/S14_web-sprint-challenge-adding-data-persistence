// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll() {
     const result = []
     const projects = await db('projects as p')

     projects.forEach(project => {
          result.push({
               project_id: project.project_id,
               project_name: project.project_name,
               project_description: project.project_description,
               project_completed: project.project_completed ? true : false
          })
     })

     return result
}

async function getById(project_id) {
     const projects = await db('projects as p')
          .where('p.project_id', project_id)

     const project = {
          project_id: projects[0].project_id,
          project_name: projects[0].project_name,
          project_description: projects[0].project_description,
          project_completed: projects[0].project_completed ? true : false
     }

     return project
}

function create(project) {
     return db('projects').insert(project)
          .then(([project_id]) => {
               return getById(project_id)
          })
}


module.exports = { getAll, getById, create }