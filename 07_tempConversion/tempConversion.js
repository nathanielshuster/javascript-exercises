function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(temp) {
  let celsius = (temp - 32) * (5/9);
  if (celsius % 1 === 0) {
    return celsius;
  } else {
    return round(celsius, 1);
  }
};

const ctof = function(temp) {
  let fahren = (temp * (9/5)) + 32;
  if (fahren % 1 === 0) {
    return fahren;
  } else {
    return round(fahren, 1);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
