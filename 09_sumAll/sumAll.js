const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return 'ERROR';
  }

  // Swap values if larger value came first
  if (a > b) {
    [a, b] = [b, a];
  }

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
