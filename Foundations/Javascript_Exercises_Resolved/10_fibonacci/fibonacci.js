const fibonacci = function(a) {

    if(a <= 0){return "OOPS"};

    let initial = 1;
    let second = 0;

    for(let i = 2; i <= a; i++){
        let current =initial + second;
        second = initial;
        initial = current;
    }

    return initial;
};

// Do not edit below this line
module.exports = fibonacci;
