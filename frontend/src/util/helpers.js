export function leadingSlash (str) {
  return str.startsWith('/') ? str : '/' + str
}

export function trailingSlash (str) {
  return str.endsWith('/') ? str : str + '/'
}

export function objCompare (testObj, originObj, evse = false) {
  const obj1Keys = Object.keys(testObj)
  const obj2Keys = Object.keys(originObj)
  const resultObj = {}
  // if (obj1Keys.length !== obj2Keys.length) {
  //     return false
  // }
  for (const k of obj1Keys) {
    if (evse) {
      if (['_id', 'id', 'active'].indexOf(k) === -1) {
        let compare = false
        if (typeof testObj[k] === 'object') {
          compare = objCompare(testObj[k], originObj[k])
        } else {
          compare = !(testObj[k] === origin[k])
        }

        if (compare !== false) {
          resultObj[k] = testObj[k]
        }
      }
    } else {
      if (testObj[k] !== originObj[k]) {
        let compare = false
        if (typeof testObj[k] === 'object') {
          compare = objCompare(testObj[k], originObj[k])
        } else {
          compare = !(testObj[k] === origin[k])
        }

        if (compare !== false) {
          resultObj[k] = testObj[k]
        }
      }
    }
  }
  const resultArr = Object.keys(resultObj)
  if (resultArr.length === 0) {
    return false
  } else {
    console.log(resultObj)
    return resultObj
  }
}

export function emailRegex (email) {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(email) || 'Invalid e-mail.'
}
