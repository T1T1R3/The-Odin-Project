const repeatString = function(string, num) {
    let fullString = [];
    if(num < 0){
        return 'ERROR';
    }
    for(let i = 0; i < num; i++){
        fullString[i] = string;
    }
    return fullString.join("");
};
// Do not edit below this line
module.exports = repeatString;
