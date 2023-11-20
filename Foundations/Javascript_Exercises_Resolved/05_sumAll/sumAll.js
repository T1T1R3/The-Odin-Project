const sumAll = function(numMin, numMax) {
    let numAux;
    if(numMax < 0 || numMin < 0 || typeof numMin != 'number' || typeof numMax != 'number'){
        return 'ERROR';
    }
    if(numMin > numMax){
        numAux = numMin;
        numMin = numMax;
        numMax = numAux;
    }
    let sumNum = 0;

    for(let i = numMax; i >= numMin; i--){
        sumNum += i;
    }

    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
