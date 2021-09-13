let a = +prompt("Введите значение");
if (isNaN(a)) {
  console.log("Упс, кажется, вы ошиблись");
} else if (typeof a === "number" && a % 2 === 0) {
  console.log("четное");
} else {
  console.log("нечетное");
}
