'use strict'
const exporess = require('express')
let todos = [
    { id: 1, title: 'ネーム', completed: false },
    { id: 2, title: '下書き', completed: true },
]
const app = exporess()

// ToDo一覧の取得
app.get('/api/todos', (req, res) => res.json(todos))

app.listen(3000)

