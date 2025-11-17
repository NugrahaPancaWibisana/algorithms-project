import boxen from "boxen";
import chalk from "chalk";
import path from "node:path";
import { fileURLToPath } from "url";
import * as fs from "node:fs/promises";
import { createInterface } from "node:readline";
import { exit, stdin, stdout } from "node:process";
import { clear, log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "data.json");
const allData = JSON.parse(await fs.readFile(dataPath, { encoding: "utf8" }));

// const rl = createInterface({
//   input: stdin,
//   output: stdout,
//   prompt: "$ ",
// });

const dataPromise = (content) => {
  return new Promise((resolve) => {
    resolve(content);
  });
};

const commandLineInterface = async (content, obj) => {
  const contentText = await dataPromise(content);
  const options = {
    borderStyle: "round",
    borderColor: "cyan",
    title: "To Do List",
    titleAlignment: "center",
  };

  const copy = Object.assign(options, obj);

  return new Promise((resolve) => {
    let text = "";
    const chars = contentText.split("");

    for (let i = 0; i < chars.length; i++) {
      setTimeout(() => {
        text += chars[i];
        clear();
        log(boxen(chalk.cyan(text), copy));
        
        if (i === chars.length - 1) {
          resolve();
        }
      }, 100 * i);
    }
  });
};

(async () => {
  await commandLineInterface("Halo semuanya       ", { height: 5, width: 80, padding: 1 });
  await commandLineInterface("Halo semuanya yow", { height: 5, width: 80, padding: 1 });
})();