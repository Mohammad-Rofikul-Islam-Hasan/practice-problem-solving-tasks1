// Problem - 1(basic math)

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Input must be a number";
  }
  return Math.pow(number, 3);
}

console.log(cubeNumber(4));
