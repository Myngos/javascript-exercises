const fibonacci = function(num) {
    if(num < 0){
        return "OOPS"
    }

    if(typeof num === 'string'){
        num = Number(num);
    }
    if(num === 0) return 0;
    if(num === 1) return 1;

    let prev = 0, prev2 =1;
    let current;

    for(let i=2;i<=num; i++){
        current = prev + prev2;
        prev = prev2;
        prev2 = current;
    }
    return current
};

// Do not edit below this line
module.exports = fibonacci;
