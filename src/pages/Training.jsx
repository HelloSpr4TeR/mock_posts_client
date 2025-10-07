import React from 'react'
import { useResizer } from '../hooks/useResizer'

const Training = () => {
  const size = useResizer(() => console.log('Я выполнился'))

  return (
    <div>
      <p>{size.height}</p>
      <p>{size.width}</p>
    </div>
  )
}

export default Training