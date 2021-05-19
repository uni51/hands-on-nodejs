// 2.3.2.1 then

asyncFunc1(input)
  // asyncFunc1完了後、その結果を引数にasyncFunc2を実行
  .then(asyncFunc2)
  // asyncFunc2完了後、その結果を引数にasyncFunc3を実行
  .then(asyncFunc3)
  // asyncFunc3完了後、その結果を引数にasyncFunc4を実行
  .then(asyncFunc4)
  .then(result => {
    // すべての非同期処理が完了したあとの処理
  })
  .catch(err => {
    // エラーハンドリング
  })