const chalk = require("chalk");

const fs = require("fs");

function handleError(error) {
  throw new Error(chalk.red(error.code, "there isn't archive in the path"));
}

function getArchive(archivePath) {
  const encoding = "utf-8";
  fs.readFile(archivePath, encoding, (error, data) => {
    if (error) {
      handleError(error);
    }

    console.log(chalk.green(data));
  });
}

getArchive("./archives/text1.md");
