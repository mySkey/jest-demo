// 返回一个promise
export function getData() {
  return new Promise(resolve => {
    resolve({
      data: '测试数据'
    })
  })
}
