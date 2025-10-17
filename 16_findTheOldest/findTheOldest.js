const findTheOldest = function(arr) {
  const sortedByAgeDesc = arr.sort((p1, p2) => {
    let p1Age = (p1.yearOfDeath ? p1.yearOfDeath : 2025) - p1.yearOfBirth;
    let p2Age = (p2.yearOfDeath ? p2.yearOfDeath : 2025) - p2.yearOfBirth;
    return p2Age - p1Age;
  })
  return sortedByAgeDesc[0];
};

// Do not edit below this line
module.exports = findTheOldest;
