const todos = [
    { id: 1, title: 'ネーム', completed: false },
    { id: 2, title: '下書き', completed: true }
]

const server = http.createServer((req, res) => {
    if (req.url === '/api/todos') {
        if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json')
            return res.end(JSON.stringify(todos))
        }
        // GET以外のHTTPメソッドはサポートしないため405(Method Not Allowed)
        res.statusCode = 405
    } else {
        // /api/todos 以外のURLはないので404(Not Found)
        res.statusCode = 404
    }
    res.end()
}).listen(3000) // 3000ポートでリクエストを待機

