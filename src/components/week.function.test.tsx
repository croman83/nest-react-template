import { getDayName, solution } from "./week.function";

describe("getDayName", () => {
  it("should 0 be Mon", () => {
    expect(getDayName(0)).toBe("Mon");
  });

  it("should 2 be Wen", () => {
    expect(getDayName(2)).toBe("Wen");
  });

  it("should 6 be Sun", () => {
    expect(getDayName(6)).toBe("Sun");
  });
});

describe("solution", () => {
  it("should Wen, 0 be Wen", () => {
    expect(solution("Wen", 0)).toBe("Wen");
  });

  it("should Wen, 2 be Fri", () => {
    expect(solution("Wen", 2)).toBe("Fri");
  });

  it("should Wen, 2 + 7 be Fri", () => {
    expect(solution("Wen", 2 + 7)).toBe("Fri");
  });

  it("should Mon, 2 be Wen", () => {
    expect(solution("Mon", 2)).toMatchSnapshot();
  });
});
