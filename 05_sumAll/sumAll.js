const sumAll = function(var1, var2) {
  let sum = 0;
  let first = var1;
  let last = var2;

  if (typeof var1 !== 'number' || typeof var2 !== 'number') {
    return "ERROR"
  } else if (var1 < 0 || var2 < 0) {
    return "ERROR"
  } else if (var1 > var2) {
    last = var1;
    first = var2;
  }

  for (let i = first; i <= last; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
