import getRandomValue from "../randomfunc";

test("to get a value between the range", () => {
  const i = getRandomValue(0, 5);
  expect([0, 1, 2, 3, 4, 5]).toContain(i);
});
