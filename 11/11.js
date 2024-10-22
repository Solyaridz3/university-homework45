import fs from "fs";

fs.readFile("data/non_existent_file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Файл не існує!");
    return;
  }
  console.log(data);
});
