const findTheOldest = function(ppl) {
  let currentYear = new Date().getFullYear();
  let getAge = (person) => {
    return (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth
  }

  let oldestPerson = ppl.reduce((p1, p2) => {
    return (getAge(p1) > getAge(p2) ? p1 : p2)
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
