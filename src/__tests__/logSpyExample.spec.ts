import { log } from '../03_logSpyExample'

describe('log', () => {
    it('should log message after a delay', () => {
        const spy = jest.spyOn(console, 'log');
        const testingString = 'hello world';

        log(testingString)

        expect(spy).toHaveBeenCalled(); 
        expect(spy).toHaveBeenCalledTimes(1); 
        expect(spy).toHaveBeenCalledWith(testingString); 
        
        expect.assertions(3)
    })
})