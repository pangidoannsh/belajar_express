const db = require('../Connection')

const index = (req, res) => {
    db.query('SELECT nim, name, prodi FROM mahasiswa', (error, result) => {
        if (error) {
            res.statusCode = 502;
        }
        res.send(result) // ngehasilin api => json
    })
}

const show = (req, res) => {
    db.query(`SELECT * FROM mahasiswa WHERE id=${req.params.id}`, (error, result) => {
        res.send(result)
    })
}

const create = (req, res) => {
    console.log(req.body.nim);
    res.send({
        message: 'Data Create'
    })
    // db.query(`INSERT INTO mahasiswa (nim,name,prodi) VALUES (${})`)
}

const edit = (req, res) => {
    res.send('Edit')
}

module.exports = { index, show, create, edit }