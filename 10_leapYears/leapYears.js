// a: divisible by 4
// b: divisible by 100
// c: divisible by 400

// Leap Year is
// (a && !b) || (a && b && c)
// a && (!b || (b && c))
const leapYears = function (year) {
  return year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
