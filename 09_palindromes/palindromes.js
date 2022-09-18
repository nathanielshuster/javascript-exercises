const palindromes = function (string) {
  let newString = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g,"");
  let reverse = [...newString].reverse().join("");

  return newString.localeCompare(reverse) === 0;
};

// Do not edit below this line
module.exports = palindromes;
