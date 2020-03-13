import React from 'react'

import HookChild2 from './HookChild2'
import HookChild3 from './HookChild3'

const HookChild1 = () => {
  return (
    <div>
      <h1>Hook Child 1</h1>
      <HookChild2 />
      <HookChild3 />
    </div>
  )
}

export default HookChild1
