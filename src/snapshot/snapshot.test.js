import { testData } from ".";

// snapshot
test("snapshot", () => {
  // 生成快照文件
  expect(testData()).toMatchSnapshot();
});

// snapshot: inline
test("snapshot: inline", () => {
  expect(testData()).toMatchInlineSnapshot(`
    {
      "age": 28,
      "name": "mySkey",
      "time": "",
    }
  `);
});
