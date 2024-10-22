import fs from "fs";

const files = ["file1.txt", "file2.txt", "file3.txt"];

Promise.all(files.map((file) => fs.promises.readFile("data/" + file, "utf8")))
  .then((data) => {
    const sum = data.reduce((acc, val) => acc + parseInt(val, 10), 0);
    console.log(`Сума: ${sum}`);
  })
  .catch((err) => console.error(err));
