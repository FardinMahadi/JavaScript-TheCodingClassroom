// Function expression
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function
const calAge3 = (birthYear) => 2037 - birthYear;

console.log(calAge(2003), calAge3(1992));

const yearsUnitRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUnitRetirement(1991));
