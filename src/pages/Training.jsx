import React, { useEffect, useRef, useState } from 'react'

const Training = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
  const [isLoad, setLoad] = useState(false)
  const [limit, setLimit] = useState(10)
  const [curPage, setCurPage] = useState(1)
  const [num, setNum] = useState('')
  const totalRef = useRef(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoad(true)
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${curPage}`)
        if (!res.ok) {
          throw new Error('Ошибка')
        }
        const totalCount = res.headers.get('x-total-count')
        totalRef.current = Number(totalCount)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoad(false)
      }
    }

    fetchPosts()
  }, [limit, curPage])

  const targetPage = () => {
    setCurPage(Number(num))
    setNum('')
  }

  const pagPages = () => {
    const result = []
    const pagin = Math.ceil(totalRef.current / limit)
    for (let i = 1; i <= pagin; i++) {
      result.push(i)
    }

    return result
  }


  return (
    <div>
      <select value={limit} onChange={e => setLimit(Number(e.target.value))}>
        <option disabled>Выбрать лимит</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={totalRef.current}>Все</option>
      </select>
      {error && <div>Ошибка: {error}</div>}
      {isLoad && <div>Загрузка</div>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.id}: {post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '5px',
        marginBottom: '5px'
      }}>
        {pagPages().map(page => (
          <p style={{
            border: page === curPage
              ? '2px solid red'
              : '1px solid green',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '20px',
            height: '20px',
            cursor: 'pointer'
          }} onClick={() => setCurPage(page)} key={page}>{page}</p>
        ))}
      </div>
      <input value={num} onChange={e => setNum(e.target.value)} />
      <button
        style={{ cursor: 'pointer' }}
        onClick={targetPage}>
        Перейти
      </button>
    </div>
  )
}

export default Training