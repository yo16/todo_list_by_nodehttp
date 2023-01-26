'use strict'
const express = require('express')
let todos = [
    { id: 1, title: 'ネーム', completed: false },
    { id: 2, title: '下書き', completed: true },
]
const app = express()

// ToDo一覧の取得
app.get('/api/todos', (req, res) => {
    if (!req.query.completed) {
        res.json(todos)
    }
    // completedクエリパラメータを指定された場合は、ToDoをフィルタリング
    const completed = req.query.completed === 'true'
    return res.json(todos.filter(todo => todo.completed === completed))
})

app.listen(3000)

