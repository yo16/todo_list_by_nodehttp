'use strict'
const express = require('express')
let todos = [
    { id: 1, title: 'ネーム', completed: false },
    { id: 2, title: '下書き', completed: true },
]
const app = express()

app.use(express.json())

// ToDo一覧の取得
app.get('/api/todos', (req, res) => {
    if (!req.query.completed) {
        res.json(todos)
    }
    // completedクエリパラメータを指定された場合は、ToDoをフィルタリング
    const completed = req.query.completed === 'true'
    return res.json(todos.filter(todo => todo.completed === completed))
})

// max-id
let id = 2
// POST時は登録
app.post('/api/todos', (req, res, next) => {
    const { title } = req.body
    if (typeof title != 'string' || !title) {
        // titleがリクエストに含まれない場合は、ステータスコード400(Bad Request)
        const err = new Error('title is required!!!')
        err.statusCode = 400
        return next(err)
    }
    // ToDoの作成
    const todo = { id: id += 1, title, completed: false }
    todos.push(todo)
    // ステータスコードを201(Created)で結果を返す
    res.status(201).json(todo)
})

// エラーハンドリングミドルウェア
app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.statusCode || 500).json({ error: err.message })

})

app.listen(3000)

