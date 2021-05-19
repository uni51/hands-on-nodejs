// 2.3.2.2 catch() 
// onRejectedを省略しthen()の後ろにcatch()を付けるパターン

asyncFunc1(input)
  .then(asyncFunc2 /* onFulfilled */)
  .then(result => { // onFulfilled
    // この中で発生したエラーもcatch()に渡したonRejectedでハンドリングされる
  })
  .catch(err => { // onRejected
    // ここにエラーハンドリングを集約できる
  })