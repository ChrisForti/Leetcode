//https://leetcode.com/problems/roman-to-integer/

// Example 1:

const s = "III";
// Output: 3
// Explanation: III = 3.
// Example 2:

const s2 = "LVIII";
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

const s3 = "MCMXCIV";
// "VICXMCM"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInt = function (s) {
  //create value table for roman numerals
  const NUMERAL_TABLE = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    //convert the letters to numbers
    const char = s[i]; // char="I"
    if (char === "I") {
      const nextChar = s[i + 1];
      if (nextChar === "V") {
        total -= NUMERAL_TABLE[char];
        continue;
      }
      if (nextChar === "X") {
        total -= NUMERAL_TABLE[char];
        continue;
      }
    }
    if (char === "X") {
      const nextChar = s[i + 1];
      if (nextChar === "L") {
        total -= NUMERAL_TABLE[char];
        continue;
      }
      if (nextChar === "C") {
        total -= NUMERAL_TABLE[char];
        continue;
      }
    }
    if (char === "C") {
      const nextChar = s[i + 1];
      if (nextChar === "D") {
        total -= NUMERAL_TABLE[char];
        continue;
      }
      if (nextChar === "M") {
        total -= NUMERAL_TABLE[char];
        continue;
      }
    }
    // total = NUMERAL_TABLE[char] + total;
    total += NUMERAL_TABLE[char];
  }
  //add or subtract numbers
  //return output
  return total;
};

console.log(romanToInt(s));
console.log(romanToInt(s2));
console.log(romanToInt(s3));
/*
function romanToInt2(s) {
  const NUMERAL_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let previousValue = 0;
  let sum = 0;
  const numerals = s.split("").reverse();
  numerals.forEach((numeral) => {
    if (NUMERAL_VALUES[numeral] >= previousValue) {
      sum += NUMERAL_VALUES[numeral];
    } else {
      sum -= NUMERAL_VALUES[numeral];
    }
    previousValue = NUMERAL_VALUES[numeral];
  });
  return sum;
}
*/
console.log(romanToInt2(s));
console.log(romanToInt2(s2));
console.log(romanToInt2(s3));
