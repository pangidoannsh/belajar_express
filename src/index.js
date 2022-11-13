const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3001

const Mahasiswa = require('./Mahasiswa')
var jsonParser = bodyParser.json()

app.use(express.static("public"))
app.use(jsonParser)
app.use(Mahasiswa)

app.listen(port, () => {
    console.log(`Run on port ${port}`)
})