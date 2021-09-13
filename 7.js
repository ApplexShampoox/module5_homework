let array = [0, 1, 2, 3, 4, "text", null, NaN, 0],
  even = 0,
  odd = 0,
  zero = 0,
  error = 0;

array.forEach(function (item) {
  if (isNaN(item)) {
    error++;
  } else if (typeof item === "number" && item === 0) {
    zero++;
  } else if (typeof item === "number" && item % 2 === 0) {
    even++;
  } else if (typeof item === "number" && item % 2 !== 0) {
    odd++;
  } else {
    error++;
  }
});

console.log("even:", even);
console.log("odd:", odd);
console.log("zero:", zero);
console.log("error:", error);
