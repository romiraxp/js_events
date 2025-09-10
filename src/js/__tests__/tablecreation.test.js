import gameFieldCreation from "../tablecreation";

/** * @jest-environment jsdom */

test("gameFieldCreation function test", () => {
  gameFieldCreation(1, 1);
  const numRow = document.querySelectorAll(".row");
  expect(numRow).not.toBeNull();
});
