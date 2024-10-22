import fs from "fs/promises";

async function readAndSumDigits() {
  try {
    const data = await fs.readFile("data/number.txt", "utf8");
    const sumOfDigits = data
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    console.log(`Сума цифр: ${sumOfDigits}`);
  } catch (err) {
    console.error(err);
  }
}

readAndSumDigits();
