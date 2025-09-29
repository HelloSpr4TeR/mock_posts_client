import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [debouncedSearch, setDebouncedSearch] = useState(value)

    useEffect(() => {
        const id = setTimeout(() => {
            setDebouncedSearch(value)
        }, delay)

        return () => clearTimeout(id)
    }, [value, delay])

    return debouncedSearch
}