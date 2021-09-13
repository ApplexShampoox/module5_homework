let pavl = new Map([
  ["age", 23],
  ["birthMonth", "April"],
  ["birthDay", 8],
]);

for (let [key, value] of pavl) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}
