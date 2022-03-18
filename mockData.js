const {
  sleep
} = require('./utils')
module.exports = {
  '/test': async () => {
    await sleep(2000)
    return {
      name: 123
    }
  }
}