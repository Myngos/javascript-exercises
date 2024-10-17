const removeFromArray = function(arr, ...args) {
    return arr.filter(remove);

    function remove(item) {
        return !args.includes(item);  
    }
};


// Do not edit below this line
module.exports = removeFromArray;
