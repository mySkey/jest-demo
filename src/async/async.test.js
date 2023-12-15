import { delay } from ".";

// 第一种：使用 done 方法
test("async: done", (done) => {
  delay("msg").then((result) => {
    expect(result).toBe("msg");
    done();
  });
});

// 第二种：如果返回的是一个 Promise 对象，可以直接使用 return 写法
test("async: return", () => {
  return delay("msg").then((result) => {
    expect(result).toBe("msg");
  });
});

// 第三种：如果返回的是一个 Promise 对象，可以直接使用 return + resolves/rejects 写法
test("async: return + resolves/rejects", () => {
  return expect(delay("msg")).resolves.toBe("msg");
});

// 第四种：使用 async 和 await
test("async: delay", async () => {
  const result = await delay("msg");
  expect(result).toBe("msg");
});
