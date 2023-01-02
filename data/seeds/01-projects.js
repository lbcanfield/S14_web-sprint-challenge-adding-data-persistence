const projects = [
     { project_name: 'Orientation' },
     { project_name: 'Git and Intro to JavaScript' },
     { project_name: 'JavaScript Fundamentals' },
     { project_name: 'User Interface' },
     { project_name: 'Technical Exam Preparation and Networking' },
     { project_name: 'Applied JavaScript' },
     { project_name: 'Intro to React' },
     { project_name: 'Single Page Applications' },
     { project_name: 'Technical Exam Preparation and Git' },
     { project_name: 'Advanced React' },
     { project_name: 'Advanced State Management' },
     { project_name: 'Advanced Web Applications' },
     { project_name: 'Technical Exam Preparation and Resume Building' },
     { project_name: 'Building RESTful APIs with Express' },
     { project_name: 'Adding Data Persistence' },
]

exports.seed = async function (knex) {
     await knex('projects').insert(projects)
}