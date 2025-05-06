import React from 'react'
import ClockFace from '../components/ClockFace'
import MyClock from '../components/UI/MyClock/MyClock'

const Clock = () => {
  return (
    <div>
      <MyClock>
        <ClockFace />
      </MyClock>
    </div>
  )
}

export default Clock