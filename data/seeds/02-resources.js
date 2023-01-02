const resources = [
     { resource_name: 'Module 1' },
     { resource_name: 'Module 2' },

]

exports.seed = async function (knex) {
     await knex('resources').insert(resources)
}