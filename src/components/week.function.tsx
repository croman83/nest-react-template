type WeekType = "Mon" | "Tue" | "Wen" | "Thu" | "Fri" | "Sat" | "Sun";

const dayOfOfWeek = {
  Mon: 0,
  Tue: 1,
  Wen: 2,
  Thu: 3,
  Fri: 4,
  Sat: 5,
  Sun: 6,
};

export function getDayName(num: number) {
  num = num % 7;
  return Object.keys(dayOfOfWeek)[num];
}

export function solution(S: WeekType, K: number) {
  return getDayName(dayOfOfWeek[S] + K);
}
