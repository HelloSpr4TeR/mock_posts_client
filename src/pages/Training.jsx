import React from 'react'
import Training from './Training/Tree'

const rootNode = {
  id: 1,
  name: 'Корень',
  children: [
    {
      id: 2,
      name: 'Ребенок 1',
      children: [
        { id: 3, name: 'Внук 1', children: [] },
        { id: 4, name: 'Внук 2', children: [] },
      ],
    },
    { id: 5, name: 'Ребенок 2', children: [] },
  ],
}


const Train = () => {

  return (
    <Training tree={rootNode} />
  )
}

export default Train