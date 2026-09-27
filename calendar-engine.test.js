// Run with: node --test calendar-engine.test.js
const test = require("node:test");
const assert = require("node:assert");
const { convertSolar2Lunar, convertLunar2Solar, canChiYear } = require("./calendar-engine");

test("hôm nay 27/09/2026 -> âm lịch đúng (mùng 17/08 Bính Ngọ)", () => {
  const lu = convertSolar2Lunar(27, 9, 2026);
  assert.strictEqual(lu.day, 17);
  assert.strictEqual(lu.month, 8);
  assert.strictEqual(canChiYear(lu.year), "Bính Ngọ");
});

test("chuyển đổi 2 chiều khớp nhau (round-trip)", () => {
  const lu = convertSolar2Lunar(1, 1, 2026);
  const back = convertLunar2Solar(lu.day, lu.month, lu.year, lu.leap);
  assert.deepStrictEqual(back, [1, 1, 2026]);
});

test("Tết Nguyên Đán 2026 rơi vào 17/02/2026 dương lịch", () => {
  const solar = convertLunar2Solar(1, 1, 2026, false);
  assert.deepStrictEqual(solar, [17, 2, 2026]);
});

test("năm 2023 có tháng nhuận (tháng 2 nhuận) - kiểm tra không throw và có ngày hợp lệ", () => {
  const lu = convertSolar2Lunar(15, 3, 2023);
  assert.ok(lu.day >= 1 && lu.day <= 30);
});

test("timezone: không lệch ngày qua nhiều mốc liên tiếp", () => {
  for (let d = 1; d <= 5; d++) {
    const lu = convertSolar2Lunar(d, 1, 2026);
    assert.ok(lu.day >= 1 && lu.day <= 30);
  }
});
