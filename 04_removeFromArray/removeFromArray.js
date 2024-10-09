const removeFromArray = function(arr, removeItem) {
    const arr = [1, 2, 3,4]
    return arr.filter(function(item) {
        // Use strict comparison to avoid removing items of different types
        for(let i = 0; i >= arr.length; i++){
            
        }
        return !removeItem.includes(item);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
