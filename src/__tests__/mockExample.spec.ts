// You are expected to mock formatNumberAsCurrency function with jest.fn()
jest.mock('../02_stringExample', () => {
    return {
        formatNumberAsCurrency: jest.fn().mockImplementation(() => {
            return 'some number'
        })
    }
}) 

import { formatNumberAsCurrency } from '../02_stringExample'
import { listOfAvailableLocaleCurrencies } from '../05_mockExample'

describe("listOfAvailableLocaleCurrencies", () => {
    it('should return correct string', () => {
        const formatNumberAsCurrencyMock = jest.fn()
        formatNumberAsCurrencyMock.bind(formatNumberAsCurrency)

        expect(listOfAvailableLocaleCurrencies()).toEqual(['some number', 'some number'])

        expect(formatNumberAsCurrency).toHaveBeenCalledTimes(2)
        expect(formatNumberAsCurrency).toHaveBeenCalledWith(1000, "us")
        expect(formatNumberAsCurrency).toHaveBeenCalledWith(1000, "de")
    })
})