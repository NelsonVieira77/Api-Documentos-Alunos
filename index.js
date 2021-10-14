const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const app = express()

const port = process.env.PORT || 3000   

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

let db = [
    {'1' :{ documento: 'Aluno1', tipo: 'Curso', horas: '3', status: 'Homologado'}},
    {'2' :{ documento: 'Aluno2', tipo: 'Palestra',  horas: '10', status: 'Homologado'}},
    {'3' :{ documento: 'Aluno3', tipo: 'WorkShop',  horas: '8', status: 'Não-Homologado'}},
    {'4' :{ documento: 'Aluno3', tipo: 'WorkShop',  horas: '4', status: 'Não-Homologado'}},
    {'5' :{ documento: 'Aluno3', tipo: 'Curso',  horas: '2', status: 'Homologado'}},
    {'6' :{ documento: 'Aluno3', tipo: 'Palestra', horas: '1', status: 'Homologado'}},
]

app.get('/', (req, res) => {
    return res.json(db)
})


app.listen(port, () => {
    console.log(`Express started at http://localhost:21262`)
})