// 将数据延时一段时间后返回
export const delay = (msg, ms: number = 1000) =>
  new Promise((resolve) => setTimeout(() => resolve(msg), ms));
