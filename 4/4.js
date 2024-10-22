import fs from "fs";

for (let i = 1; i <= 10; i++) {
  fs.writeFile(`data/file${i}.txt`, i.toString(), (err) => {
    if (err) {
      console.error(err);
    }
  });
}
