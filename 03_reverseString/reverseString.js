const reverseString = function(str) {

    const revstring = str.split("").reverse().join("");
    return revstring;
    /*
    The split() method divides the string into an array of characters, reverse() reverses the array, and 
    join() combines the reversed characters into a new string, effectively reversing the original string.
     */
};

// Do not edit below this line
module.exports = reverseString;
