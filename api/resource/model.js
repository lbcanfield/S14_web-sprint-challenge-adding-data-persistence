// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAll() {
     return db('resources')

}

async function getById(resource_id) {
     const resource = await db('resources as r')
          .where('r.resource_id', resource_id).first()
     return resource
}

function create(resource) {
     return db('resources').insert(resource)
          .then(([resource_id]) => {
               return getById(resource_id)
          })
}

module.exports = { getAll, create }