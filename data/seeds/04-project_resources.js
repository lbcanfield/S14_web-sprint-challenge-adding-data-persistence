const project_resources = [
     { project_id: 1, resource_id: 1 },
     { project_id: 1, resource_id: 2 },
     { project_id: 2, resource_id: 1 },
     { project_id: 2, resource_id: 2 },
     { project_id: 3, resource_id: 1 },
     { project_id: 3, resource_id: 2 },
     { project_id: 4, resource_id: 1 },
     { project_id: 4, resource_id: 2 },
     { project_id: 5, resource_id: 1 },
     { project_id: 5, resource_id: 2 },
     { project_id: 6, resource_id: 1 },
     { project_id: 6, resource_id: 2 },
     { project_id: 7, resource_id: 1 },
     { project_id: 7, resource_id: 2 },
     { project_id: 8, resource_id: 1 },
     { project_id: 8, resource_id: 2 },
     { project_id: 9, resource_id: 1 },
     { project_id: 9, resource_id: 2 },
     { project_id: 10, resource_id: 1 },
     { project_id: 10, resource_id: 2 },
     { project_id: 11, resource_id: 1 },
     { project_id: 11, resource_id: 2 },
     { project_id: 12, resource_id: 1 },
     { project_id: 12, resource_id: 2 },
     { project_id: 13, resource_id: 1 },
     { project_id: 13, resource_id: 2 },
     { project_id: 14, resource_id: 1 },
     { project_id: 14, resource_id: 2 },
     { project_id: 15, resource_id: 1 },
     { project_id: 15, resource_id: 2 },
]

exports.seed = async function (knex) {
     await knex('project_resources').insert(project_resources)
}