export const timer1 = (callback) => {
  setTimeout(() => {
      callback()
  }, 1000)
}

export const timer2 = (callback) => {
  setTimeout(() => {
      callback()
      setTimeout(() => {
          callback()
      }, 1000)
  }, 1000)
}