import { formatNumberAsCurrency } from './02_stringExample';

/**
 * In this example you need to mock the formatNumberAsCurrency function
 * and return a list of available currencies for the locales 'us' and 'de'
 * you can use jest.fn jest.mock to mock the function and its output
 */
export function listOfAvailableLocaleCurrencies() {
    return [
        formatNumberAsCurrency(1000, 'us'),
        formatNumberAsCurrency(1000, 'de'),
    ];
}