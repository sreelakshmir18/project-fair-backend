// 1. import express
const express = require('express')

const userController = require('../Controllers/userController')

const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const multerConfig = require('../Middlewares/multerMiddleware')

//2. create router object of express to define path
const router = express. Router()  

//3. Register api call
router.post('/register',userController.register)

//4. Login api call
router.post('/login',userController.login)

//5. add project api call
router.post('/project/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//6. Get a particular project details API
router.get('/project/get-auser-project',jwtMiddleware,projectController.getAProject)

//7. Get 3 projects details for home project
router.get('/project/home-project',projectController.getHomeProjects)


//8. get all projects details
router.get('/project/all-user-project',jwtMiddleware,projectController.getAllUserProjects)

//9. delete user project
router.delete('/project/delete-user-project/:pid',jwtMiddleware,projectController.deleteUserProject)




//10. Udate user project
router.put('/project/update-user-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.updateUserProject)

module.exports = router