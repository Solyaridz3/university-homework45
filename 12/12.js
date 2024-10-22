import fs from "fs";

fs.readFile("data/numbers.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const numbers = data.split(",");
  numbers.forEach((number, index) => {
    fs.writeFile(`data/file${index + 1}.txt`, number, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
});
