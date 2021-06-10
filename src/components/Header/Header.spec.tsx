import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  it("should match snapshot", () => {
    expect(render(<Header />)).toMatchSnapshot();
  });
});
