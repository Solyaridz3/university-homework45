import fs from "fs";

const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

fileNames.forEach((fileName) => {
  const randomNumber = Math.floor(Math.random() * 100);
  fs.writeFile("data/" + fileName, randomNumber.toString(), (err) => {
    if (err) {
      console.error(err);
    }
  });
});

Promise.all(fileNames.map((fileName) => fs.promises.readFile("data/" + fileName, "utf8")))
  .then((data) => {
    const sum = data.reduce((acc, val) => acc + parseInt(val, 10), 0);
    fs.writeFile("data/sum.txt", sum.toString(), (err) => {
      if (err) {
        console.error(err);
      }
    });
  })
  .catch((err) => console.error(err));
