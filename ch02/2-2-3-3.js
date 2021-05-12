function parseJSONAsync(json, callback) { 
  setTimeout(() => { 
    try { 
      callback(null, JSON.parse(json)) 
    } catch (err) { 
      callback(err) 
    } 
  }, 1000) 
} 

const cache3 = {}

function parseJSONAsyncWithCache(json, callback) { 
  const cached = cache3[json]
  if (cached) {
    // Node.jsのみを対象としたコードの場合 
    process.nextTick(() => callback(cached.err, cached.result)) 
    // ブラウザ環境でも動かすコードの場合 
    // 1. queueMicrotask()を使う 
    // queueMicrotask(() => callback(cached.err, cached.result)) 
    // 2. Promiseを使う 
    // Promise.resolve().then(() => callback(cached.err, cached.result)) 
    return 
  }
  parseJSONAsync(json, (err, result) => {
    cache3[json] = { err, result }
    callback(err, result)
  })
}

// 1回目の実行 
parseJSONAsyncWithCache( 
  '{"message": "Hello", "to": "World"}', 
  (err, result) => { 
    console.log('1回目の結果', err, result) 
    // コールバックの中で2回目を実行 
    parseJSONAsyncWithCache( 
      '{"message": "Hello", "to": "World"}', 
      (err, result) => { 
        console.log('2回目の結果', err, result) 
      } 
    ) 
    console.log('2回目の呼び出し完了') 
  } 
) 
console.log('1回目の呼び出し完了') 