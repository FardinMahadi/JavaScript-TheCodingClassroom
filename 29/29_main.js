"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 342;

const calAge = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calAge(2003));
