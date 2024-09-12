const yearUnitRetirement = function (birthYear, firstName) {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  //   return `${firstName} retirs in ${retirement} years`;
};

const calAge = function (birthYear) {
  return 2037 - birthYear;
};

console.log(yearUnitRetirement(2003, "Hasan"));
console.log(yearUnitRetirement(1949, "Mahadi"));
