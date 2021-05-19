// 2.3.2.3 finally 
// $ node 2-3-2-3.js で実行 

Promise 
  .resolve('foo') 
  .finally(() => 
    new Promise(resolve => 
      setTimeout( 
        () => { 
          console.log('finally()で3秒経過') 
          resolve() 
        }, 
        3000 
      ) 
    ) 
  ) 
  .then(console.log) 
