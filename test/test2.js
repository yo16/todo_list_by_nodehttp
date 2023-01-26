// completedのテスト

require('isomorphic-fetch')

await fetch('http://localhost:3000/api/todos?completed=true')
console.log(_.status, await _.json())
