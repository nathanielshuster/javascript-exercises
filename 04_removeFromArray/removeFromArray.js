const removeFromArray = function(array, ...args) {
  let newArr = array;
  let myArgs = [].slice.call(args);

  for (let i = 0; i < myArgs.length; i++) {
    index = array.indexOf(myArgs[i]);
    if (index > -1) {
      newArr.splice(index, 1);
    }
  }

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
