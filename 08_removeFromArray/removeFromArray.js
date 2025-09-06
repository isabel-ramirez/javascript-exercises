const removeFromArray = function (arr, ...arg) {
  const itemsToDelete = [...arg];

  for (let i = 0; i < arr.length; i++) {
    // Delete element if it is one of the args to delete
    if (itemsToDelete.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
