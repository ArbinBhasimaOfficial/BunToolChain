import { sum } from "../sum.js";
import { expect, test } from "vitest"

test('adds the two numbers', () => {
  expect(sum(150, 7)).toBe(157)
})
