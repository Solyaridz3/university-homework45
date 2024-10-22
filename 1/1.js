import fs from "fs";

fs.readFile('data/number.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const number = parseInt(data, 10);
    console.log(`Квадрат числа: ${number * number}`);
});
