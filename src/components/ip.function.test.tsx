import { countIpVariations, isSegmentValid } from "./ip.function";

describe("isSegmentValid", () => {
  it("should 0 be valid", () => {
    expect(isSegmentValid("0")).toBeTruthy();
  });

  it("should 00 be invalid", () => {
    expect(isSegmentValid("00")).toBeFalsy();
  });

  it("should 255 be invalid", () => {
    expect(isSegmentValid("255")).toBeTruthy();
  });

  it("should 256 be invalid", () => {
    expect(isSegmentValid("256")).toBeFalsy();
  });

  it("should 01 be invalid", () => {
    expect(isSegmentValid("01")).toBeFalsy();
  });

  it("should 0 be invalid", () => {
    expect(isSegmentValid("0")).toBeTruthy();
  });
});

describe("countIpVariations", () => {
  it("should count 0 to 0", () => {
    expect(countIpVariations("0")).toBe(0);
  });

  it("should count 1111 to 1", () => {
    expect(countIpVariations("1111")).toBe(1);
  });

  it("should count 0000 to 1", () => {
    expect(countIpVariations("0000")).toBe(1);
  });

  it("should count 255000 to 2", () => {
    expect(countIpVariations("255000")).toBe(2);
  });

  it("should count 255001 to 2", () => {
    expect(countIpVariations("255001")).toBe(2);
  });

  it("should count 255255255255 to 1", () => {
    expect(countIpVariations("255255255255")).toBe(1);
  });

  it("should count 188212 to 1", () => {
    expect(countIpVariations("188212")).toBe(8);
  });

  it("should count 4216712120 to 1", () => {
    expect(countIpVariations("4216712120")).toBe(2);
  });
});
