// Only numbers and lowercase letters
const cleanString = function (string) {
  const chars = string.trim().toLowerCase().split('');
  const filteredChars = chars.filter(char => {
    const charCode = char.charCodeAt(0);
    return ((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57));
  });
  return filteredChars.join('');
}

const palindromes = function (string) {
  let str = cleanString(string);
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
