import * as React from 'react'
import noop from 'lodash/noop'

export default React.createContext({
  user: null,
  start: noop,
})
