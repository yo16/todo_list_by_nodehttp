// POSTのテスト(Error)

require('isomorphic-fetch')

await fetch(
    'http://localhost:3000/api/todos',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ not_title: 'エラーのペン入れ' })
    }
)

console.log(_.status, await _.json())
