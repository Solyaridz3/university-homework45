import fs from "fs/promises"

async function processNumbers() {
  try {
    const data = await fs.readFile("data/numbers.txt", "utf8");
    const numbers = data.split(",");

    await Promise.all(
      numbers.map((number, index) =>
        fs.writeFile(`data/file${index + 1}.txt`, number)
      )
    );
    
    console.log("Files written successfully");
  } catch (err) {
    console.error(err);
  }
}

processNumbers();
