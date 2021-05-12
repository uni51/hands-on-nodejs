// 非同期処理の場合
// 2-2-2-2.jsをNode.jsの規約に沿って書き直したバージョン
function parseJSONAsync(json, callback) { 
  setTimeout(() => { 
    try { 
      callback(null, console.log(JSON.parse(json))) 
    } catch (err) { 
      callback(err) 
    } 
  }, 1000) 
} 
parseJSONAsync('不正なJSON', (err, result) => 
  console.log('parse結果', err, result) 
) 