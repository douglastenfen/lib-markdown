const chalk = require("chalk");

const fs = require("fs");

function linkExtract(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm;
  const resultArray = [];
  let temp;

  while ((temp = regex.exec(text)) !== null) {
    resultArray.push({ [temp[1]]: temp[2] });
  }

  return resultArray.length === 0 ? "There aren't links" : resultArray;
}

function handleError(error) {
  throw new Error(chalk.red(error.code, "there isn't archive in the path"));
}

async function getArchive(archivePath) {
  const encoding = "utf-8";
  try {
    const data = await fs.promises.readFile(archivePath, encoding);
    return linkExtract(data);
  } catch (error) {
    handleError(error);
  }
}

module.exports = getArchive;
