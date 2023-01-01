require('dotenv').config()                                       //allows for the addition of environmental variables
const server = require('./api/server.js')                        //creates a variable called server that is assigned the export values of ./api/server.js

const port = process.env.PORT || 5000                            //defines the port to be used for the api using 'dotenv'
const host = process.env.HOSTNAME || 'http://localhost'          //defines the host to be used 

server.listen(port, () => {
     console.log(`\nAPI is ACTIVE on ${host}:${port}\n`)
})