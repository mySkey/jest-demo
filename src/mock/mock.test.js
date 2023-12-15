import { arrayMap, getUserList } from ".";
import axios from "axios";

// jest.fn
test("mock: jest.fn", () => {
  const mockCallback = jest.fn((x) => 42 + x);

  arrayMap([0, 1, 2, 3], mockCallback);

  // mock fn 调用次数
  expect(mockCallback.mock.calls).toHaveLength(4);

  // 第一次调用的第一个参数应该是 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 第三次调用的第一个参数应该是 2
  expect(mockCallback.mock.calls[2][0]).toBe(2);

  // 第三次调用的返回值应该是 44
  expect(mockCallback.mock.results[2].value).toBe(44);
});

// .mock
test("mock: .mock", () => {
  const mockCallback = jest.fn((x) => 42 + x);

  arrayMap([0, 1, 2, 3], mockCallback);

  // console.log(mockCallback.mock);
});

// module
jest.mock("axios");
test("mock: module", async () => {
  const res = await getUserList();
  const userList = res?.data;
  expect(userList?.length).toBe(undefined);
});
