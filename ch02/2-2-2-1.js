// 同期処理の場合
function parseJSONSync(json) {
  try {
    return console.log(JSON.parse(json))
  } catch (err) {
    console.error('エラーをキャッチ', err)
  }
}
parseJSONSync('不正なJSON')
// parseJSONSync('{"message": "Hello", "to": "World"}')