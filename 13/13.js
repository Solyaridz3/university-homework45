import fs from "fs";

const files = ["file1.txt", "file2.txt", "file3.txt", "file4.txt", "file5.txt"];

Promise.all(files.map((file) => fs.promises.readFile("data/" + file, "utf8")))
  .then((data) => {
    const sum = data.reduce((acc, val) => acc + parseInt(val, 10), 0);
    fs.writeFile("data/result13.txt", sum.toString(), (err) => {
      if (err) {
        console.error(err);
      }
    });
  })
  .catch((err) => console.error(err));
