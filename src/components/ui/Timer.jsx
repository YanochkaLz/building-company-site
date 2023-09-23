import React from 'react'

const Timer = ({value = 0, prop = 'лет'}) => {
  return (
    <div className='timer'>
      <div className='timer-time'>{value}</div>
      <div className='timer-prop'>{prop}</div>
    </div>
  )
}

export default Timer
