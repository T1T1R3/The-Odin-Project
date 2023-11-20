

const removeFromArray = function(array, number0, number1, number2, number3) {
    let index;
        if(number0){
            index = array.indexOf(number0);
            if(index > -1){
                array.splice(index, 1);
            }
        }
        if(number1){
            index = array.indexOf(number1);
            if(index > -1){
                array.splice(index, 1);
            }
        }
        if(number2){
            index = array.indexOf(number2);
            if(index > -1){
                array.splice(index, 1);
            }
        }
        if(number3){
            index = array.indexOf(number3);
            if(index > -1){
                array.splice(index, 1);
            }
        }
        return array;
};

// Do not edit below this line
module.exports = removeFromArray;
