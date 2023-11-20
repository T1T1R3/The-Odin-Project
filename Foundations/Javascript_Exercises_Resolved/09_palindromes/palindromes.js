const palindromes = function (a) {
    let newString = a.split("").reverse().join('');
    a = a.toLowerCase();
    a = a.replace(/[^a-z0-9]/g, '');;
    newString = newString.toLowerCase();
    newString = newString.replace(/[^a-z0-9]/g, '');
    if(newString === a){
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
