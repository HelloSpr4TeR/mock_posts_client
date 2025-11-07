import React, { useEffect, useState } from 'react'

function getPeople(name, page = 1, options = {}) {
  return fetch(
    `http://rickandmortyapi.com/api/character?name=${name}&page=${page}`,
    options
  )
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
}

const Training = () => {
  const [name, setName] = useState('')
  const [characters, setCharacters] = useState([])
  const [isLoad, setLoad] = useState(false)
  const [error, setError] = useState(null)
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    setError(null)
    const fetchCharacters = async (name, page, signal) => {
      setLoad(true)
      try {
        const data = await getPeople(name, page, signal)
        setCharacters(data)
      } catch (e) {
        if (e.status === 404) {
          setError('Персонаж не найден')
        } else if (e.name === 'AbortError') {
          console.log('Запрос отменен')
        }
      } finally {
        setLoad(false)
      }
    }

    const id = setTimeout(() => {
      fetchCharacters(name, pageCount, { signal })
    }, 500)

    return () => {
      controller.abort()
      clearTimeout(id)
    }
  }, [name, pageCount])

  const nextPage = () => {
    setPageCount(prev => prev + 1)
  }

  const prevPage = () => {
    setPageCount(prev => prev - 1)
  }

  const pagination = (totalPages) => {
    const result = []
    for (let i = 1; i <= totalPages; i++) {
      result.push(i)
    }
    return result
  }

  return (
    <div>
      <input
        value={name}
        placeholder='Найти персонажа'
        onChange={e => setName(e.target.value)}
      />
      {error && <div>Ошибка: {error}</div>}
      {isLoad && <div>Загрузка</div>}
      <ul>
        {!error && characters.results?.map(character => (
          <li key={character.id}>
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
      <div>Всего страниц: {characters?.info?.pages}</div>
      <div>Текущая страница: {pageCount}</div>
      <button
        disabled={pageCount === 1}
        onClick={prevPage}>Пред страница
      </button>
      <button
        disabled={pageCount === characters?.info?.pages}
        onClick={nextPage}>След страница
      </button>
      <div style={{
        display: 'flex',
        gap: '3px',
        flexWrap: 'wrap'
      }}>
        {pagination(characters?.info?.pages).map(page => (
          <p style={{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '20px',
            border: pageCount === page
              ? '2px solid red'
              : '1px solid blue'
          }}
            key={page} onClick={() => setPageCount(page)}>{page}</p>
        ))}
      </div>
    </div>
  )
}

export default Training