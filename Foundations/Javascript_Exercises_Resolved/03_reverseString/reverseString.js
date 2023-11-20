const reverseString = function(string) {
    let reversedString = [];
    for(let i = 0; i < string.length; i++){
        reversedString[i]= string.charAt(string.length - 1 - i);
    }

    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
