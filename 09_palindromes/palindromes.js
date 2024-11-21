const palindromes = function (str) {

    let cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reverse = cleanedStr.split("").reverse().join("");

    if(reverse === cleanedStr){
        return true
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
