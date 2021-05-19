// 2.3.2.2 catch() 
// thenを2つの引数で実行するパターン

asyncFunc1(input)
  .then(
    asyncFunc2, // onFulfilled
    err => { // onRejected
      // asyncFunc1用のエラーハンドリング
    }
  )
  .then(
    result => { // onFulfilled
      // この中で発生したエラーは第二引数（onRejected）でハンドリングされない
    },
    err => { // onRejected
      // asyncFunc2用のエラーハンドリング
    }
  )