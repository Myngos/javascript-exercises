const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a -b;
};

const sum = function(arr, n) {
  if(n <= 0){
    return 0
  }
  arr = arr.reduce((prev, next)=>{
    return prev + next
  })
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
