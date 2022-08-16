const chalk = require("chalk");

const fs = require("fs");

function handleError(error) {
  throw new Error(chalk.red(error.code, "there isn't archive in the path"));
}

async function getArchive(archivePath) {
  const encoding = "utf-8";
  try {
    const data = await fs.promises.readFile(archivePath, encoding);
    console.log(chalk.green(data));
  } catch (error) {
    handleError(error);
  }
}

getArchive("./archives/text1.md");
