const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const final = array.reduce((partialSum, a) => partialSum + a, 0);
  return final;
};

const multiply = function(array) {
  const product = array.reduce((a, b) => a * b, 1);
  return product;
};

const power = function(a, b) {
	const final = Math.pow(a, b);
  return final;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let ans = 1
  for (let i = 1; i <= num; i++) {
    ans = i*ans
  }

  return ans;
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
