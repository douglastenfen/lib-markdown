const fetch = require("node-fetch");

function handleErrors(error) {
  throw new Error(error.message);
}

async function checkStatus(urlArray) {
  try {
    const statusArray = await Promise.all(
      urlArray.map(async (url) => {
        const res = await fetch(url);

        return res.status;
      })
    );
    return statusArray;
  } catch (error) {
    handleErrors(error);
  }
}

function generateUrlArray(linksArray) {
  return linksArray.map((objectLink) => Object.values(objectLink).join());
}

async function validateURLs(linksArray) {
  const links = generateUrlArray(linksArray);
  const statusLinks = await checkStatus(links);
  const results = linksArray.map((object, index) => ({
    ...object,
    status: statusLinks[index],
  }));

  return results;
}

module.exports = validateURLs;
