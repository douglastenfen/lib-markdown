const chalk = require("chalk");

const path = process.argv;

const getArchive = require("./index");
const validateURLs = require("./http-validator");

async function processText(archivePath) {
  const result = await getArchive(archivePath[2]);
  if (path[3] === "validate") {
    console.log(chalk.yellow("validated links:"), await validateURLs(result));
  } else {
    console.log(chalk.yellow("links list:"), result);
  }
}

processText(path);
