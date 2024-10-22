import fs from "fs";

const files = ["file1.txt", "file2.txt"];

Promise.all(files.map((file) => fs.promises.readFile("data/" + file, "utf8")))
  .then((data) => {
    const sum = data.reduce((acc, val) => acc + parseInt(val, 10), 0);
    fs.writeFile("result14.txt", sum.toString(), (err) => {
      if (err) {
        console.error(err);
      }
    });
  })
  .catch((err) => console.error(err));
