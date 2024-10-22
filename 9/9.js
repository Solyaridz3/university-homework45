import fs from "fs";

fs.promises
  .readFile("data/readme1.txt", "utf8")
  .then((data1) =>
    fs.promises
      .readFile("data/readme2.txt", "utf8")
      .then((data2) =>
        fs.promises
          .writeFile("data/readme.txt", data1 + data2)
          .catch(() => console.log("ошибка записи файла")),
      )
      .catch(() => console.log("ошибка чтения файла readme2")),
  )
  .catch(() => console.log("ошибка чтения файла readme1"));
