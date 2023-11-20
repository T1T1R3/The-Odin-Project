const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  if(a.length === 0){
    return 0;
  }
  const res = a.reduce((acc, current) => acc + current);
  return res;
};

const multiply = function(a) {
  const res = a.reduce((acc, current) => acc * current);
  return res;
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  let res = 1;
  for(let i = 0; i < a; i++){
    res*=(a-i);
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
