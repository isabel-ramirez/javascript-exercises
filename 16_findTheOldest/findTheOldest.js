const getAge = function (person) {
  let yearOfDeath = person.yearOfDeath ?? new Date().getFullYear();
  return yearOfDeath - person.yearOfBirth;
}
const findTheOldest = function(arr) {
  const sortedByAgeDesc = arr.sort((p1, p2) => getAge(p2) - getAge(p1));
  return sortedByAgeDesc[0];
};

// Do not edit below this line
module.exports = findTheOldest;
