const userController = require('../controllers/user.controller')


module.exports = app => {
    app.get('/api/users',userController.findAll)
    app.put('/api/users/:id',userController.update)
    app.delete('/api/users/:id',userController.delete)

}