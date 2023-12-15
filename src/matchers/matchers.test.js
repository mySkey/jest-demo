/**
 * matchers: toBe
 * 匹配值，相当于===
 * expect(1 + 1).toBe(2);
 */
test("matchers: toBe", () => {
  expect(1 + 1).toBe(2);
});

/**
 * matchers: toEqual
 * 匹配值，只匹配内容不匹配引用，可以用于引用类型的匹配
 * expect({}).toBe({});
 */
test("matchers: toBe", () => {
  const info = {
    name: "mySkey",
  };
  const mess = {
    name: "mySkey",
  };
  expect(info).toEqual(mess);
});

// 有时需要区分 undefined、null 和 false，但有时又不想区别对待
test("matchers: undefined、null 和 false", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
});

// 比较数字的方法都有匹配器
test("matchers: numbers", () => {
  const value = 2 + 2;
  // 大于
  expect(value).toBeGreaterThan(3);
  // 大于等于
  expect(value).toBeGreaterThanOrEqual(3.5);
  // 小于
  expect(value).toBeLessThan(5);
  // 小于等于
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// 比较浮点数
test("matchers: floats", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

// 比较字符串
test("matchers: strings", () => {
  const name = "mySkey";
  expect(name).toMatch(/Skey/);
});

// 数组
test("matchers: arrays", () => {
  const arr = [1, 2, 3];
  expect(arr).toContain(2);
  // toMatchObject
  expect(arr).toMatchObject([1, 2, 3]);
});

// 对象
test("matchers: objects", () => {
  const obj = {
    name: "mySkey",
  };
  expect(obj).toHaveProperty("name", "mySkey");
});

// 布尔
test("matchers: booleans", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

// Error
test("matchers: errors", () => {
  expect(() => {
    throw new Error("error");
  }).toThrow();
});
