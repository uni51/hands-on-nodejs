function parseJSONAsync(json) {
  // Promiseインスタンスを生成して返す（この時点ではpending状態） 
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        // fulfilled状態にする（解決）  
        resolve(JSON.parse(json))
      } catch (err) {
        // rejected状態にする（拒否）   
        reject(err)
      }
    }, 1000)
  ) 
}

const toBeFulfilled = parseJSONAsync('{"foo": 1}') 
const toBeRejected = parseJSONAsync('不正なJSON') 
console.log('*************** Promise生成直後 ***************') 
console.log(toBeFulfilled) 
console.log(toBeRejected) 
setTimeout(() => { 
  console.log('******************** 1秒後 ********************') 
  console.log(toBeFulfilled) 
  console.log(toBeRejected) 
}, 1000) 