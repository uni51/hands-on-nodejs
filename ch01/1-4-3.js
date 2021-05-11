const price = { 
  value: 100, 
  get withTax() { 
    // 同じオブジェクトのプロパティはthisから参照可能（this.value） 
    // Math.floor()は数値の小数点を切り捨てる 
    return Math.floor(this.value * 1.1) 
  }, 
  set withTax(withTax) { 
    // Math.ceil()は数値の小数点を切り上げる 
    this.value = Math.ceil(withTax / 1.1) 
  } 
} 

console.log(price.withTax)

price.withTax = 333

console.log(price.withTax)

console.log(price.value)