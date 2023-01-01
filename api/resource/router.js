// build your `/api/resources` router here
const router = require('express').Router()
const RESOURCES = require('./model')

router.get('/', (request, response, next) => {
     RESOURCES.getAll()
          .then(resources => {
               response.json(resources)
          })
          .catch(next)
})
router.get('/:resource_id', (request, response, next) => {
     RESOURCES.getById(request.params.resource_id)
          .then(resource => {
               response.status(200).json(resource)
          })
          .catch(next)
})






//ERROR HANDLING ENDPOINT
router.use((error, request, response, next) => { //eslint-disable-line
     response.status(error.status || 500).json({
          message: error.message,
          stack: error.stack
     })
})

module.exports = router