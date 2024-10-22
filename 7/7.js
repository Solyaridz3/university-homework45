import fs from "fs";

fs.readFile("data/number.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const number = parseInt(data, 10);
  fs.writeFile("data/number.txt", (number * number).toString(), (err) => {
    if (err) {
      console.error(err);
    }
  });
});
