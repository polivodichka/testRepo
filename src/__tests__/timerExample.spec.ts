import { logMsgAfterSomeTime, logOnInterval } from "../04_timerExample";
jest.useFakeTimers()

describe("timerExample", () => {
  describe("logMsgAfterSomeTime", () => {
    it("should log message after a delay", () => {
      const duration = 2000;
      const spy = jest.spyOn(global, "setTimeout");

      logMsgAfterSomeTime("hello world", duration);

          
      jest.runAllTimers()
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.any(Function), duration);


    });
  });

  describe("logOnInterval", () => {
    it("should log message after a delay", () => {
      const duration = 10000;
      const spy = jest.spyOn(global, "setInterval");
      logOnInterval(duration);

      jest.runOnlyPendingTimers()
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.any(Function), duration);
    
    });
  });
});
