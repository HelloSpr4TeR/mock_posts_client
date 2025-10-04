import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const initCharacters = `https://rickandmortyapi.com/api/character`

const Training = () => {
  const [characters, setCharacters] = useState([])
  const [load, setIsLoad] = useState(false)
  const [error, setError] = useState(null)
  const [flag, setIsFlag] = useState(false)
  const nextRef = useRef(null)

  useEffect(() => {
    const fetchCharacters = async (url) => {
      setIsLoad(true)
      try {
        const res = await axios.get(url)
        console.log(res.data)
        nextRef.current = res.data.info.next
        setCharacters(prev => [...prev, ...res.data.results])
      } catch (e) {
        setError(e.message)
      } finally {
        setIsLoad(false)
      }
    }

    fetchCharacters(nextRef.current ? nextRef.current : initCharacters)
  }, [flag])

  return (
    <div>
      {error && <div>Ошибка: {error}</div>}
      {load && <div>Загрузка...</div>}
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            {character.name}
          </li>
        ))}
      </ul>
      <button onClick={() => setIsFlag(prev => !prev)} disabled={load}>Загрузить еще</button>
    </div>
  )
}

export default Training