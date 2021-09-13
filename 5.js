let arr = ["Паша", "Маша", "Валя", "Саша"];
console.log("Количество элементов массива - " + arr.length);
arr.forEach(function (item, i) {
  console.log(`${i + 1} - ${item}`);
});
