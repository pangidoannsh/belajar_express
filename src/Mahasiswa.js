const express = require('express')
const mahasiswaController = require('./controllers/MahasiswaController')
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


const Router = express.Router()

Router.get('/mahasiswa', urlencodedParser, mahasiswaController.index)
Router.post('/mahasiswa', urlencodedParser, mahasiswaController.create)

// Router.route('/mahasiswa')
//     .get(mahasiswaController.index)
//     .post(mahasiswaController.create)

Router.route('/mahasiswa/:id').get(mahasiswaController.show)
    .put(mahasiswaController.edit)

module.exports = Router