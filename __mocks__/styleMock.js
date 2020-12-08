/* eslint-disable no-var, comma-dangle */

var idObj = new Proxy(
  {},
  {
    get: function getter(target, key) {
      console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', key)
      if (key === '__esModule') {
        return false
      }
      return key
    },
  }
)

export default idObj
