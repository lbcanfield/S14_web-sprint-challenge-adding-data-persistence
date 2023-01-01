// build your `/api/projects` router here
const router = require('express').Router()
const PROJECTS = require('./model')






//ERROR HANDLING ENDPOINT
router.use((error, request, response, next) => { //eslint-disable-line
     response.status(error.status || 500).json({
          message: error.message,
          stack: error.stack
     })
})

module.exports = router