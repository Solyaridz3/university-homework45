import fs from "fs/promises";

function readFile() {
  const data = fs.readFile("data/number.txt", "utf8");
  data.then(console.log).catch((err) => console.error(err));
  console.log("Цей код буде виконано раніше, ніж файл буде прочитано");
}

readFile();
