const chalk = require("chalk");

const path = process.argv;

const getArchive = require("./index");

async function processText(archivePath) {
  const result = await getArchive(archivePath[2]);

  console.log(chalk.yellow("links list:"), result);
}

processText(path);
