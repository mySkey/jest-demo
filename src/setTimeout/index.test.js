import { timer1, timer2 } from '.'

// setTimeout: done
test('setTimeout: done', (done) => {
  timer1(() => {
    expect(1).toBe(1)
    done()
  })
})

// setTimeout: useFakeTimers + runAllTimers
describe('setTimeout: useFakeTimers + runAllTimers', () => {
  
  test('setTimeout: timer1', () => {
    jest.useFakeTimers()
    const fn = jest.fn()
    timer1(fn)
    jest.runAllTimers()
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('setTimeout: 2', () => {
    jest.useFakeTimers()
    const fn = jest.fn()
    timer2(fn)
    jest.runAllTimers()
    expect(fn).toHaveBeenCalledTimes(2)
  })
})

// setTimeout: useFakeTimers + advanceTimersByTime
describe('setTimeout: useFakeTimers + advanceTimersByTime', () => {

  test('setTimeout: timer1', () => {
    jest.useFakeTimers()
    const fn = jest.fn()
    timer1(fn)
    jest.advanceTimersByTime(1000)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('setTimeout: timer2', () => {
    jest.useFakeTimers()
    const fn = jest.fn()
    timer2(fn)
    jest.advanceTimersByTime(1000)
    expect(fn).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(1000)
    expect(fn).toHaveBeenCalledTimes(2)
  })
})