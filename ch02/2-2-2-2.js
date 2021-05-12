// 非同期処理の場合
function parseJSONASync(json, callback) {
  try {
    setTimeout(() => {
      callback(console.log(JSON.parse(json)))
    }, 1000)
  } catch (err) {
    console.error('エラーをキャッチ', err)
    callback({})
  }
}
parseJSONASync('不正なJSON', result => 
  console.log('parse結果', result)
)
