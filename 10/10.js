import fs from "fs";

fs.readFile("data/number.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const sumOfDigits = data
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  console.log(`Сума цифр: ${sumOfDigits}`);
});
