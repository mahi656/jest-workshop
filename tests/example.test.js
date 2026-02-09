const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
})

test("invalid subtotal throws error", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT"))
    .toThrow("Invalid subtotal");
})

test("no coupon case (>=1000 gets 5% auto discount)", () => {
  const result = calculateFinalAmount(1000);
  expect(result).toBe(950);
})

test("SAVE10 coupon applies 10% discount (max 100)", () => {
  const result = calculateFinalAmount(500, "SAVE10");
  expect(result).toBe(450);
})

test("FLAT50 boundary case should not go below 0", () => {
  const result = calculateFinalAmount(50, "FLAT50");
  expect(result).toBe(0);
})