const convertToCelsius = function(fahrenheit) {
  if(((fahrenheit - 32) * 5/9) % 1 === 0)
    return (fahrenheit - 32) * 5/9;
  else
    return parseFloat(((fahrenheit - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  if(((celsius * 9/5) + 32) % 1 === 0)
    return (celsius * 9/5) + 32;
  else
    return parseFloat(((celsius * 9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
