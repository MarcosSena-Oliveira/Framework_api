const express = require('express')
const routes = express.Router()

let db = [
    {
        "postagens": [
            {
                "id": 1,
                "titulo": "Postagem local",
                "body": "",
                "UserID": 1
            },
            {
                "id": 2,
                "titulo": "Alternativa",
                "body": "",
                "UserID": 1
            },
            {
                "id": 3,
                "titulo": "Complementar",
                "body": "",
                "UserID": 1
            }
        ],
        "albuns": [
            {
                "id": 1,
                "titulo":"Álbum inicial",
                "UserID": 2
            },
            {
                "id": 2,
                "titulo":"Alternativo",
                "UserID": 2
            }, {
                "id": 3,
                "titulo":"Sequêncial",
                "UserID": 2
            }
        ],
        "todos":[
            {
                "id": 1,
                "titulo": "Título Principal",
                "descrição": "",
                "UserID": 3
            },
            {
                "id": 2,
                "titulo": "Contexto Alternativo",
                "descrição": "",
                "UserID": 3
            },
            {
                "id": 3,
                "titulo": "Referência Adicional",
                "descrição": "",
                "UserID": 3
            }
        ],
        "USER": [
            {
                "ID": 1,
                "nome": "postagens"
            },
            {
                "ID": 2,
                "nome": "albuns"
            },
            {
                "ID": 3,
                "nome": "todos"
            }
        ]
    }
]

routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/posts', (req, res) => {
    const body = req.body
    if(!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.ID
    let newDB = db.filter(item => {
        if(!item[id])
        return item
    })

    db = newDB
    return res.send(newDB)
})

module.exports = routes