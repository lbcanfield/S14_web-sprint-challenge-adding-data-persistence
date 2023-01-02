// build your `/api/projects` router here
const router = require('express').Router()
const PROJECTS = require('./model')


router.get('/', (request, response, next) => {
     PROJECTS.getAll()
          .then(projects => {
               response.json(projects)
          })
          .catch(next)
})
router.get('/:project_id', (request, response, next) => {
     PROJECTS.getById(request.params.project_id)
          .then(project => {
               response.status(200).json(project)
          })
          .catch(next)
})

router.post('/', (request, response, next) => {
     PROJECTS.create(request.body)
          .then(project => {
               response.status(200).json(project)
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