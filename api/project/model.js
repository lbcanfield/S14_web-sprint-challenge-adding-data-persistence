// build your `Project` model here
function getAll() {
     return Promise.resolve('Getting all projects works')
}

function getById(project_id) {
     return Promise.resolve(`Project with id of ${project_id} works`)
}


module.exports = { getAll, getById }