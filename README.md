# How to complete the homework

Your task is to go through all the tests in `src/__tests__` folder and make them pass.

- You can find files to test in `src` folder
- You can find tests in `src/__tests__` folder
- Tests are ordered by difficulty from 01 to 05 but you can complete them in any order

## How to run tests

1. `npm install` or `yarn install` to install dependencies
2. To run tests you can use `npm test` or `yarn test` to run tests only once
3. Use `npm test -- --watch`, or `npm run test:watch`, or `yarn test --watch`, or `yarn test:watch` to run tests in watch mode

- If you would like to see coverage then run `npm test -- --coverage`
  - It should generate html report in `/coverage` dir
  - you can use `npx http-server ./coverage -c-1 -o` to serve it and see HTML report in browser

## Hints

These are hints, use them only if you're stuck and only if you've checked the documentation, google, stackoverflow before.
It's better to try to solve it on your own first.
Also if you've found a solution you can compare it with the one listed below.

<details>
<summary>basicExample</summary>
In this example you're expected to use:

- `toBeGreaterThan`
- `toBeLessThan`
- `toBeGreaterThanOrEqual`
- `toBeLessThanOrEqual`
</details>

<details>
<summary>stringExample</summary>
Sometimes you can't test string completely, but you can test if it contains some substring.
In this example you're expected to use:

- `toBe`
- `toEqual`
- `toMatch`
- `toContain`

Extra hints:

1. If you're stuck on `'de'` locale you can use couple `toContain` assertions to check if the string contains `€` and a number as it's substrings.
2. Use google or stackoverflow to see why `Intl.NumberFormat` is different with different locales.

</details>

<details>
<summary>logSpyExample</summary>
In this example you're expected to use:

- `spyOn` to spy on `console.log` method
- `toHaveBeenCalled` to check if method was called
- `toHaveBeenCalledTimes` to check how many times method was called
- `toHaveBeenCalledWith` to check if method was called with specific arguments
</details>

<details>
<summary>timerExample</summary>
This example is similar to the previous one, but it uses `setTimeout` and `setInterval` methods.
The challenge here is to mock timers. Does you get console.log output when you run tests? If yes, then you're not mocking timers correctly.

In this example you're expected to use:

- `spyOn` to spy on `console.log`, `setTimeout` and `setInterval` methods
- `jest.useFakeTimers` to mock timers
- `jest.runAllTimers` or `jest.runOnlyPendingTimers` to run timers
- `toHaveBeenCalled` to check if method was called
- `toHaveBeenCalledTimes` to check how many times method was called
- `toHaveBeenCalledWith` to check if method was called with specific arguments
</details>

<details>
<summary>mockExample</summary>

In this example you need to mock the `formatNumberAsCurrency` function and return a list of available currencies for the locales 'us' and 'de'.
You're expected to use:

- `jest.fn` to mock `formatNumberAsCurrency` function
- `jest.mock` to mock `formatNumberAsCurrency` function
- `mockReturnValue` to return a value from mocked function and see how it changes the output of `listOfAvailableLocaleCurrencies` function

Hint 2:

- You can assign `jest.fn` to a variable and use it as a mock function `const formatNumberAsCurrencyMock = jest.fn()` 
```

```
</details>
## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Submit Solution` link on <a href="https://app.codescreen.com/candidate/e4cdc938-b01d-482a-8247-14a4e2b15404" target="_blank">this screen</a>.