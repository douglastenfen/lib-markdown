const getArchive = require("../index");

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("getArchive::", () => {
  it("must be a function", () => {
    expect(typeof getArchive).toBe("function");
  });

  it("should return array with results", async () => {
    const result = await getArchive(
      "/home/odt/Documentos/dev/estudos/alura/Formação NodeJS com Express/lib-markdown/test/archives/text1.md"
    );
    expect(result).toEqual(arrayResult);
  });

  it("Should return message 'There aren't links'", async () => {
    const result = await getArchive(
      '/home/odt/Documentos/dev/estudos/alura/Formação NodeJS com Express/lib-markdown/test/archives/text1_wolinks.md'
    );
  expect(result).toBe("There aren't links");
  });
});
