import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

const Training = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
  const [load, setLoad] = useState(false)
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoad(true)
      try {
        const result = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
        setPosts(result.data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoad(false)
      }
    }

    fetchPosts()
  }, [])

  const searchedPosts = useMemo(() => {
    return posts.filter(post => post.title.toLowerCase().includes(debouncedSearch.toLowerCase()))
  }, [posts, debouncedSearch])

  return (
    <>
      <input
        placeholder='Поиск поста...'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {error && <div>Ошибка: {error}</div>}
        {load && <div>Загрузка...</div>}
        {searchedPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Training