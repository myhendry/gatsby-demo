import React from 'react'

import HookChild1 from '../components/hooks/HookChild1'
import ThemeContext from '../context/ThemeContext'

const Hooks = () => {
  return (
    <div>
      <ThemeContext.Provider
        value={{
          color: 'blue',
        }}
      >
        <h1>Hooks </h1>
        <HookChild1 />
      </ThemeContext.Provider>
    </div>
  )
}

export default Hooks
