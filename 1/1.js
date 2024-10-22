import fs from "fs/promises";

async function readAndSquareNumber() {
  try {
    const data = await fs.readFile("data/number.txt", "utf8");
    const number = parseInt(data, 10);
    console.log(`Квадрат числа: ${number * number}`);
  } catch (err) {
    console.error(err);
  }
}

readAndSquareNumber();
