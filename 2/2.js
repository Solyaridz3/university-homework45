import fs from "fs";

fs.readFile("data/number.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Цей код буде виконано раніше, ніж файл буде прочитано");
