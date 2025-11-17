import path from "node:path";
import { fileURLToPath } from "url";
import * as fs from "node:fs/promises";
import { createInterface } from "node:readline";
import { exit, stdin, stdout } from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "data.json");
const allData = JSON.parse(await fs.readFile(dataPath, { encoding: "utf8" }));
const rl = createInterface({
  input: stdin,
  output: stdout,
  prompt: "TODOLIST> ",
});

const view = (utils, data) => {
  console.log("=======================================");

  data.map((value, index) => {
    if (index + utils.prevList <= utils.nextList) {
      console.log(`${index + utils.prevList + 1}. ${value.data}`);
    }
  });

  console.log("=======================================");

  console.log("\n");
  console.log("Command: ");
  utils.commands.map((value, index) => {
    if (utils.prevList === 0) {
      if (index === 0) return;
      console.log("  ", value.cmd);
    } else {
      console.log("  ", value.cmd);
    }
  });

  console.log("\n");
};

(() => {
  let utils = {
    list: true,
    prevList: 0,
    nextList: 4,
    commands: [
      { cmd: "prev - halaman sebelumnya" },
      { cmd: "next - halaman selanjutnya" },
    ],
  };

  if (utils.list) {
    console.clear();
    view(utils, allData);
  }

  rl.prompt();

  rl.on("line", (line) => {
    switch (line.trim()) {
      case "prev":
        console.clear();

        if (utils.prevList > 0) {
          utils.prevList -= 5;
          utils.nextList -= 5;
        }
        if (utils.list) {
          view(utils, allData);
        }
        break;

      case "next":
        console.clear();

        if (utils.prevList >= 0) {
          utils.prevList += 5;
          utils.nextList += 5;
        }
        if (utils.list) {
          view(utils, allData);
        }
        break;

      default:
        console.log("Tidak ada di cmd");
        break;
    }
    rl.prompt();
  }).on("close", () => {
    console.log("Have a great day!");
    exit(0);
  });
})();
