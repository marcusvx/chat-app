import { formatTime } from "./format-time";
const MONTH = 6;
const YEAR = 2021;
const DAY = 8;

describe("formatTime helper", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(YEAR, MONTH, DAY));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should return time formatted for valid date string", () => {
    // arrange
    const date = new Date(2021, 6, 9, 14, 33, 0);
    const toLocaleSpy = jest
      .spyOn(Date.prototype, "toLocaleTimeString")
      .mockReturnValue("02:33 PM");
    const parseSpy = jest
      .spyOn(Date, "parse")
      .mockImplementation(() => date.getDate());
    const timestamp = "2021-06-09T14:33:00+00:00";

    // act
    const result = formatTime(timestamp);

    // assert
    expect(result).toBe("02:33 PM");
    expect(parseSpy).toHaveBeenCalledWith(timestamp);
    expect(toLocaleSpy).toHaveBeenLastCalledWith([], { timeStyle: "short" });
  });

  it("should return time formatted for number", () => {
    // arrange
    const toLocaleSpy = jest
      .spyOn(Date.prototype, "toLocaleTimeString")
      .mockReturnValue("12:00 PM");
    const setHoursSpy = jest.spyOn(Date.prototype, "setHours");
    const setMinutesSpy = jest.spyOn(Date.prototype, "setMinutes");
    const hour = 12;

    // act
    const result = formatTime(hour);

    // assert
    expect(result).toBe("12:00 PM");
    expect(setMinutesSpy).toHaveBeenLastCalledWith(0);
    expect(setHoursSpy).toHaveBeenLastCalledWith(hour);
    expect(toLocaleSpy).toHaveBeenLastCalledWith([], { timeStyle: "short" });
  });
});
