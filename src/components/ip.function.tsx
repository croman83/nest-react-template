export function isSegmentValid(str: string): boolean {
  const firstChar = str[0];
  if (firstChar === "0" && str.length > 1) {
    return false;
  }
  return parseInt(str) < 256;
}

export const countIpVariations = (
  str: string,
  segmentIndex: number = 3
): number => {
  let result = 0;

  let segment = "";
  for (let charIndex = 0; charIndex < 3; charIndex++) {
    const char = str[charIndex];
    if (char === undefined) break;

    segment += char;

    if (isSegmentValid(segment)) {
      let rest = str.substring(charIndex + 1);

      if (segmentIndex === 0 && rest.length === 0) {
        result += 1;
      } else if (segmentIndex > 0 && rest.length > 0) {
        result += countIpVariations(rest, segmentIndex - 1);
      }
    }
  }

  return result;
};
