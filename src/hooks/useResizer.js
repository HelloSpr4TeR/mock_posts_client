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