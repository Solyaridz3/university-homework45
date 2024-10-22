import fs from "fs/promises";

async function readFile() {
  try {
    const data = await fs.readFile("data/non_existent_file.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Файл не існує!");
  }
}

readFile();
