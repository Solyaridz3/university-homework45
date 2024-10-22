import fs from 'fs/promises';

async function readAndSquareNumber() {
  try {
    const data = await fs.readFile('data/number.txt', 'utf8');
    const number = parseInt(data, 10);
    await fs.writeFile('data/number.txt', (number * number).toString());
    console.log('Число успішно піднесено до квадрату та записано у файл');
  } catch (err) {
    console.error(err);
  }
}

readAndSquareNumber();
