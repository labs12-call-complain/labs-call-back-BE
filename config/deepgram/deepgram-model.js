const db = require('../../data/dbConfig');

module.exports = {
    get: function() {
        return db('projects')
    },
    getById: function(id) {
        return db('projects')
                .where({ id })
                .first()
                .then(project => {
                    console.log('getById', projects)
                    if (project) {
                        return getByProject(id).then(roles => {
                            project.roles = roles;
                            return project;
                        });
                    } else {
                        return null;
                    }
                })
    },
    insert: function(project) {
        return db('projects')
        .insert(project, 'id')
        .then(([id]) => this.get(id));
    },
    update: function(id, body){
        return db('projects')
            .where({id})
            .first()
            .update(body)
            .then(count => {
                if(count > 0){
                    return db('projects')
                    .where({id})
                    .first()
                } else {
                    return null
                }
            })
    },
    delete: function(id){
        return db('projects')
            .where({id})
            .del()
    }
}