const chalk = require("chalk");

const fs = require("fs");

function getArchive(archivePath) {
  const encoding = "utf-8";
  fs.readFile(archivePath, encoding, (_, data) => {
    console.log(chalk.green(data));
  });
}

getArchive("./archives/text1.md");
