// build your `Resource` model here
function getAll() {
     return Promise.resolve('Getting all resources works')
}

function getById(resource_id) {
     return Promise.resolve(`Resource with id of ${resource_id} works`)
}


module.exports = { getAll, getById }