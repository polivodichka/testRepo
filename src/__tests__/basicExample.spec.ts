import { someRandomNumber } from '../01_basicExample'

describe("someRandomNumber", () => {
    it("should return a number", () => {
        const number = someRandomNumber();

        expect(number).toBeLessThan(100);
        expect(number).toBeGreaterThanOrEqual(0);

        expect.assertions(2)
    })
})