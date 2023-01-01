const express = require('express')                                              //variable 'express' requires the express library
const projectsRouter = require('./project/router.js')                           //variable that requires the export of ./project/router.js
const resourcesRouter = require('./resource/router.js')                         //variable that requires the export of ./resource/router.js
const tasksRouter = require('./task/router.js')                                 //variable that requires the export of ./task/router.js



const server = express();                                                       //variable 'server' assigned the invocation of express
server.use(express.json())                                                      //server use statement to parse JSON data

//Routers
server.use('/api/projects', projectsRouter)                                     //use statement to take advantage of the functions in /project/router.js
server.use('/api/resource', resourcesRouter)                                    //use statement to take advantage of the functions in /resource/router.js
server.use('/api/task', tasksRouter)                                            //use statement to take advantage of the functions in /task/router.js

//Server Catchall Use 
server.use('*', (request, response) => {
     response.json({ API: 'ACTIVE' })
})


module.exports = server                                                         //exports server to be used by index.js