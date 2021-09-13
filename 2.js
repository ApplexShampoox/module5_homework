let x = null;
switch (typeof x) {
  case "number":
    console.log("x - Число");
    break;
  case "string":
    console.log("x - Строка");
    break;
  case "boolean":
    console.log("x - Булево значение");
    break;
  default:
    console.log("Тип x не определён");
}
