// This is solves it in-place
const removeFromArray = function (arr, ...args) {
  for (let i = 0; i < arr.length; i++) {
    // Delete element if it is one of the args to delete
    if (args.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

// Creates a new array, with any values in args filtered out
const removeFromArray2 = function (arr, ...args) {
  return arr.filter(val => !args.includes(val));
};
// Do not edit below this line
module.exports = removeFromArray;
