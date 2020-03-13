import React, { useContext } from 'react'

import ThemeContext from '../../context/ThemeContext'

const HookChild3 = () => {
  const { color } = React.useContext(ThemeContext)

  return (
    <div>
      <h1>Hook Child 3</h1>
      <p style={{ color }}>Hello World</p>
    </div>
  )
}

export default HookChild3
