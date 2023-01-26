// POSTのテスト

require('isomorphic-fetch')

await fetch(
    'http://localhost:3000/api/todos',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: 'ペン入れ' })
    }
)
