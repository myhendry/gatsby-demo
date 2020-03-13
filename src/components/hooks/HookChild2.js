import React from 'react'

import ThemeContext from '../../context/ThemeContext'

const HookChild2 = () => {
  return (
    <div>
      <h1>HookChild 2</h1>
      <ThemeContext.Consumer>
        {({ color }) => {
          return <p style={{ color }}>Hello World</p>
        }}
      </ThemeContext.Consumer>
    </div>
  )
}

export default HookChild2
