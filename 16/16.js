import fs from "fs/promises";

async function func() {
    const data = await fs.readFile('data/readme.txt', 'utf8');
    console.log(data);
}

func();
