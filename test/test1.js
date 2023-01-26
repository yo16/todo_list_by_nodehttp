// getのテスト

require('isomorphic-fetch')

await fetch('http://localhost:3000/api/todos')
console.log(_.status, await _.json())
