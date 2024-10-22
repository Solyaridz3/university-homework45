import fs from "fs/promises";

async function writeFiles() {
  try {
    const writePromises = [];
    for (let i = 1; i <= 10; i++) {
      writePromises.push(fs.writeFile(`data/file${i}.txt`, i.toString()));
    }
    await Promise.all(writePromises);
    console.log("All files written successfully");
  } catch (err) {
    console.error(err);
  }
}

writeFiles();
