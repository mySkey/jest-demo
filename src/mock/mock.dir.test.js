jest.mock('./index')
// 从__mocks__中引入
import { getData } from './index';

// 设置callbackFun方法从源文件index中查找
const { callbackFun } = jest.requireActual('./index')

test('测试 getData，使用__mock__', async () => {
  const data = await getData()
  expect(data).toEqual({ data: '测试数据' })
})

test('测试 callbackFun，使用mockReturnValueOnce设置返回值', () => {
  let fun = jest.fn()
  fun.mockReturnValueOnce('123') 
  
  expect(callbackFun(fun)).toBe('123')

})
