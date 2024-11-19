const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a -b;
};

const sum = function(arr) {
  if(arr<=0){
    return 0
  }
  let sum = arr.reduce((prev, next)=>{
    return prev + next
  })

  return sum;
};

const multiply = function(arr) {
  let product = arr.reduce((prev, next)=>{
    return prev * next
  })
  return product
};

const power = function(num, power) {
	return num**power
};

const factorial = function(num) {
  let factorial = 1
	for(let i = 1; i <= num; i++){

     factorial = factorial * i
  }

  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
