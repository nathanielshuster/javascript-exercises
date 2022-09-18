const fibonacci = function(num) {
  if (num < 1) {
    return "OOPS"
  }

  let init = [1, 1];
  let fibNum = 1;
  let count = 2;

  while (count <= num) {
    let a = init[0];
    let b = init[1];
    init = [b, a + b];
    count++;
    fibNum = b;
  }

  return fibNum;
};

// Do not edit below this line
module.exports = fibonacci;
