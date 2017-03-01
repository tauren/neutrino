import React from 'react'
import _ from 'lodash'

import styles from './styles.css'

function Button ({children}) {
  _.map([], 'foo')
  return (
    <button>{children}</button>
  )
}
Button.propTypes = {
  children: React.PropTypes.node
}

export default Button
