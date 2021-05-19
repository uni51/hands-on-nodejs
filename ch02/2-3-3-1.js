// 2.3.3.1 Promise.all()
// $ node 2-3-3-1.js で実行 

const performance = require('perf_hooks').performance;

function asyncFunc() { 
  return new Promise(resolve => setTimeout(resolve, 1000)) 
} 

// perf_hooks.performance.now()で現在時刻を取得 
const start = performance.now() 

// 逐次実行 
asyncFunc() 
  .then(asyncFunc) 
  .then(asyncFunc) 
  .then(asyncFunc) 
  .then(() => 
    console.log('逐次実行所要時間', performance.now() - start) 
  ) 

// Promise.all()で並行実行 
Promise 
  .all([ 
    asyncFunc(), 
    asyncFunc(), 
    asyncFunc(), 
    asyncFunc() 
  ]) 
  .then(() => 
    console.log('並行実行所要時間', performance.now() - start) 
  ) 

// 並行実行所要時間 1008.1201769970357
// 逐次実行所要時間 4017.093543998897