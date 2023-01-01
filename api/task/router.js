// build your `/api/tasks` router here
const router = require('express').Router()
const TASKS = require('./model')

router.get('/', (request, response, next) => {
     TASKS.getAll()
          .then(tasks => {
               response.json(tasks)
          })
          .catch(next)
})
router.get('/:task_id', (request, response, next) => {
     TASKS.getById(request.params.task_id)
          .then(task => {
               response.status(200).json(task)
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