// Problem - 1

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Input must be a number";
  }
  return Math.pow(number, 3);
}

console.log(cubeNumber(4));

// Problem - 2

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Both input must be string";
  }
  return string1.includes(string2);
}

console.log(matchFinder("Shoaib", "oai"));

// Problem - 3

function sortMaker(arr) {
  if (arr[0] <= 0 || arr[1] <= 0) {
    return "Invalid Input";
  } else if (arr[0] === arr[1]) {
    return "Equal";
  }
  return arr.sort((a, b) => b - a);
}

console.log(sortMaker([1, 3]));
