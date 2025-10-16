import { useEffect, useState } from "react"

export const useResizer = (callback) => {
    const [resize, setResize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const handleResize = () => {
        callback()
        setResize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return resize
}

// import React, { useEffect, useState } from 'react'

// const Training = () => {
//   const [state, setState] = useState(0)
//   console.log(state)

//   useEffect(() => {
//     setState(state => state + 1)
//   }, [])

//   useEffect(() => {
//     console.log(state)
//     setTimeout(() => {
//       console.log(state)
//     }, 100)
//   }, [])

//   return (
//     <div>Training</div>
//   )
// }

// export default Training

// import React, { useEffect, useLayoutEffect, useState } from 'react'

// const Training = () => {
//   console.log('App')

//   const [state, setState] = useState(0)

//   useEffect(() => {
//     setState(state => state + 1)
//   }, [])

//   useEffect(() => {
//     console.log('useEffect 1')

//     return () => {
//       console.log('useEffect 1 cleanup')
//     }
//   }, [state])

//   useEffect(() => {
//     console.log('useEffect 2')

//     return () => {
//       console.log('useEffect 2 cleanup')
//     }
//   }, [state])

//   useLayoutEffect(() => {
//     console.log('useLayoutEffect')

//     return () => {
//       console.log('useLayoutEffect cleanup')
//     }
//   })

//   return (
//     <div>Training</div>
//   )
// }

// export default Training