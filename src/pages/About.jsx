import React from 'react';
import styled from 'styled-components';
import Counter from '../components/Counter';

const AboutWrapper = styled.div`
  padding: 40px;
  background: #fff0f0;
  border: 2px solid #ff4d4d;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(255, 0, 0, 0.15);
  max-width: 500px;
  margin: 40px auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #cc0000;
  margin-bottom: 20px;
`;

const About = () => {
  return (
    <AboutWrapper>
      <Title>Счетчик</Title>
      <Counter />
    </AboutWrapper>
  );
};

export default About;

// import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'

// const Counter = () => {
//     const [search, setSearch] = useState('')
//     const [posts, setPosts] = useState([])
//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(false)
//     const refSearch = useRef(null)

//     useEffect(() => {
//         const fetchPosts = async () => {
//             setLoading(true)
//             try {
//                 const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//                 if (!res.ok) {
//                     throw new Error('error')
//                 }
//                 const data = await res.json()
//                 setPosts(data)
//             } catch (e) {
//                 setError(e)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchPosts()
//     }, [])

//     const searchPosts = useMemo(() => posts.filter(post => (
//         post.title.toLowerCase().includes(search.toLowerCase())
//     )), [search, posts])

//     const deletePost = useCallback((id) => {
//         setPosts(posts => posts.filter(post => (
//             post.id !== id
//         )))
//     }, [])

//     const searchPost = () => {
//         setSearch(refSearch.current.value)
//         refSearch.current.value = ''
//     }

//     if (loading) return (
//         <div>Загрузка...</div>
//     )

//     if (error) return (
//         <div>Ошибка</div>
//     )

//     return (
//         <div>
//             <input type='text' ref={refSearch} placeholder='Поиск...' /> <button
//                 onClick={searchPost}>Найти пост</button>
//             <ul>

//                 {searchPosts.slice(0, 10).map(post => (
//                     <li key={post.id}>
//                         <h4>{post.id}</h4>
//                         <h3>{post.title}</h3>
//                         <p>{post.body}</p>
//                         <button onClick={() => deletePost(post.id)}>Удалить пост</button>
//                     </li>
//                 ))}

//             </ul>
//         </div>
//     )
// }

// export default Counter

// import { useEffect, useRef, useState } from 'react';
// import './../styles/chars.css';

// function getRandomElement16() {
//     return Math.floor(Math.random() * 16) + 1;
// }

// const Counter = () => {
//     const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

//     const [result, setResult] = useState(null);
//     const [mole, setMole] = useState(false);
//     const refInterval = useRef(null);
//     const [count, setCount] = useState(0)
//     const [timer, setTimer] = useState(10)
//     const refTimer = useRef(null)
//     const [endGame, setEndGame] = useState(false)

//     const startGame = () => {
//         clearInterval(refInterval.current);
//         clearInterval(refTimer.current);
//         setCount(0)
//         setTimer(10)
//         setResult(null)
//         setEndGame(false)
//         const idTimer = setInterval(() => {
//             setTimer(prev => {
//                 if (prev === 0) {
//                     setEndGame(true)
//                     clearInterval(idTimer)
//                     return 0
//                 }
//                 return prev - 1
//             })
//         }, 1000)

//         refTimer.current = idTimer

//         const idInterval = setInterval(() => {
//             setResult(getRandomElement16());
//             setMole(true);
//         }, 800)

//         refInterval.current = idInterval
//     };

//     const boomStart = () => {
//         setMole(false);
//         setCount(prev => prev + 1)
//     };

//     useEffect(() => {
//         return () => {
//             clearInterval(refInterval.current);
//             clearInterval(refTimer.current);
//         }
//     }, []);

//     return (
//         <div className='container'>
//             <div>Счет: {count}</div>
//             <div>Время: {timer}</div>
//             {endGame
//                 ? <div style={{ fontSize: '5rem' }}>Ваш счет: {count}</div>
//                 : <div className='chars'>
//                     {chars.map((item) =>
//                         <div className='item' key={item}>
//                             {result === item && mole
//                                 ? <div className='mole' onClick={boomStart}>
//                                     крот
//                                 </div>
//                                 : null}
//                         </div>
//                     )}
//                 </div>}
//             <button onClick={startGame}>Начать игру</button>
//         </div>
//     );
// };

// export default Counter;