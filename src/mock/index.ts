import axios from "axios";

// map函数
export const arrayMap = (arr: any[], fn: Function) => {
  const res: any[] = [];
  for (const index in arr) {
    const item = arr[index];
    res.push(item);
    fn(item, index);
  }
  return res;
};

// 获取用户列表
export const getUserList = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

export const callbackFun = (fn: Function) => {
  return fn();
}