import { formatNumberAsCurrency } from "../02_stringExample";
describe("formatNumberAsCurrency", () => {
  test("formatNumberAsCurrency returns correct string with de locale", () => {
    const deFormat = formatNumberAsCurrency(1000, "de");

    expect(deFormat).toMatch(/^\d{1,3}(\.\d{3})*\,\d{2}\s\€$/);

    expect.assertions(1);
  });
  test("formatNumberAsCurrency returns correct string with us locale", () => {
    const usFormat = formatNumberAsCurrency(1000, "us");
    console.log(usFormat);

    expect(usFormat).toMatch(/^\d{1,3}(\,\d{3})*$/);

    expect.assertions(1)
  });
  test("formatNumberAsCurrency returns correct string with fr locale", () => {
    const frFormat = formatNumberAsCurrency(1000, "fr");
    expect(frFormat).toBe("fr locale is currently not supported");
    expect.assertions(1);
  });
});
