/*
HTTPサーバーに対してリクエストを送信する処理
POSTを送ってみるテスト
*/

http.request(
    'http://localhost:3000/api/todos',
    { method: 'POST'},
    res => {
    let responseData = ''
    console.log('statusCode', res.statusCode)
    res.on('data', chunk => responseData += chunk)
    res.on('end', () => console.log('responseData', JSON.parse(responseData)))
}).end()
