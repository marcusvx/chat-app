import axios from "axios";
import { fetcher } from ".";

describe("fetcher helper", () => {
  it("should successfully return axios get request with timezone header", async () => {
    // arrange
    jest.spyOn(Date.prototype, "getTimezoneOffset").mockReturnValue(300);

    const expected = { foo: "bar" };
    const axiosGet = jest
      .spyOn(axios, "get")
      .mockResolvedValue({ status: 200, data: expected });
    const url = "http://host.test";

    // act
    const result = await fetcher(url);

    // assert
    expect(axiosGet).toHaveBeenCalledWith(url, {
      headers: { "X-Timezone-Offset": -5 },
    });
    expect(result).toEqual(expected);
  });
});
