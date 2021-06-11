import { getDateParts } from "./get-date-parts";

describe("getDateParts helper", () => {
  it("should return year, base 1 month and day for given date", () => {
    // arrange
    const date = new Date(2021, 4, 3);
    const expected = { year: 2021, month: 5, day: 3 };

    // act
    const actual = getDateParts(date);

    // assert
    expect(actual).toEqual(expected);
  });
});
