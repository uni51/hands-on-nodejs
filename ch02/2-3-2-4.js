// 2.3.2.4 then()、catch()、finally() に渡すコールバックの実行タイミング
// $ node 2-3-2-4.js で実行 

Promise.resolve('foo').then(result => console.log('コールバック', result)) 
console.log('この行が先に実行される') 