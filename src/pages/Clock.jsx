import React from 'react'
import ClockFace from '../components/ClockFace'
import MyClock from '../components/UI/MyClock/MyClock'

const Clock = () => {
  return (
    <div>
      <MyClock>
        <ClockFace />
      </MyClock>
    </div>
  )
}

export default Clock

// import React, { useEffect, useState } from 'react'

// const Counter = () => {
//     const [taskName, setTaskName] = useState('')
//     const [taskDesc, setTaskDesc] = useState('')
//     const [tasks, setTasks] = useState(() => {
//         const saved = localStorage.getItem('tasks')
//         return saved ? JSON.parse(saved) : []
//     })

//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(tasks))
//     }, [tasks])

//     const createTask = (e) => {
//         e.preventDefault()
//         setTasks(prev => [{
//             id: Date.now(),
//             name: taskName,
//             desc: taskDesc,
//             checked: false
//         }, ...prev])
//         setTaskName('')
//         setTaskDesc('')
//     }

//     const toggle = (id) => {
//         setTasks(prev =>
//             prev.map(task =>
//                 task.id === id ? { ...task, checked: !task.checked } : task
//             )
//         )
//     }

//     const delTask = (id) => {
//         setTasks(prev =>
//             prev.filter(task => task.id !== id)
//         )
//     }

//     return (
//         <div>
//             <form onSubmit={createTask}>
//                 <div>
//                     <input value={taskName} placeholder='Введите название задачи'
//                         onChange={e => setTaskName(e.target.value)} required />
//                 </div>
//                 <div>
//                     <textarea value={taskDesc} placeholder='Введите описание задачи'
//                         onChange={e => setTaskDesc(e.target.value)} required />
//                 </div>
//                 <button type='submit'>Добавить задачу</button>
//             </form>
//             <ol>
//                 {tasks.map(task =>
//                     <li key={task.id}>
//                         <h3>Название: {task.name}</h3>
//                         <p>Описние: {task.desc}</p>
//                         <input type='checkbox' checked={task.checked} onChange={() => toggle(task.id)} />
//                         <div>
//                             <button onClick={() => delTask(task.id)}>Удалить</button>
//                         </div>
//                     </li>
//                 )}
//             </ol>
//         </div>
//     )
// }

// export default Counter

// import React, { useState } from 'react'

// const Counter = () => {
//     const [nameTask, setNameTask] = useState('')
//     const [descriptionTask, setDescriptionTask] = useState('')
//     const [tasks, setTasks] = useState([])

//     const createTask = (e) => {
//         e.preventDefault()
//         setTasks(prev => [{ id: Date.now(), nameTask, descriptionTask, checked: false }, ...prev])
//         setNameTask('')
//         setDescriptionTask('')
//     }

//     const deleteTask = (id) => {
//         setTasks(prev => prev.filter(task => task.id !== id))
//     }

//     const toggleChecked = (id) => {
//         setTasks(prev => prev.map(task => {
//             if (task.id === id) {
//                 return { ...task, checked: !task.checked }
//             } else {
//                 return task
//             }
//         }))
//     }

//     return (
//         <div>
//             <form onSubmit={createTask}>
//                 <div>
//                     <input value={nameTask} placeholder='Введите название задачи'
//                         onChange={(e) => setNameTask(e.target.value)} required />
//                 </div>
//                 <div>
//                     <input value={descriptionTask} placeholder='Введите описание задачи'
//                         onChange={(e) => setDescriptionTask(e.target.value)} required />
//                 </div>
//                 <button type='submit'>Создать задачу</button>
//             </form>
//             <ul>
//                 {tasks.map((task) => (
//                     <li key={task.id}>
//                         <h3>Название задачи: {task.nameTask}</h3>
//                         <p>Описание задачи: {task.descriptionTask}</p>
//                         <input style={{ transform: 'scale(1.8)', marginRight: '10px', marginTop: '10px' }} type='checkbox' checked={task.checked}
//                             onChange={() => toggleChecked(task.id)} />
//                         <button onClick={() => deleteTask(task.id)}>Удалить задачу</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Counter


// const Counter = () => {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [users, setUsers] = useState([])
//     const [loading, setLoading] = useState(false)

//     const fetchUsers = async (e) => {
//         e.preventDefault()
//         setLoading(true)
//         try {
//             const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify({ name, email })
//             })
//             if (!res.ok) {
//                 throw new Error('Ошибка отправки')
//             }
//             const users = await res.json()
//             setUsers(prev => [users, ...prev])
//             console.log(users)
//             setName('')
//             setEmail('')
//         } catch (e) {
//             console.log(e)
//             setName('')
//             setEmail('')
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={fetchUsers}>
//                 <div>
//                     <input value={name} placeholder='Введите имя'
//                         onChange={(e) => setName(e.target.value)} required />
//                 </div>
//                 <div>
//                     <input type="email" value={email} placeholder='Введите email'
//                         onChange={(e) => setEmail(e.target.value)} required />
//                 </div>
//                 {loading ? <div>Загрузка</div> : <button type='submit'>Добавить пользователя</button>}
//             </form>
//             <ul>
//                 {users.map((user, index) => (
//                     <li key={index}>
//                         <h3>Имя пользователя: {user.name}</h3>
//                         <p>Email пользователя: {user.email}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Counter



// const Counter = () => {
//     const [count, setCount] = useState(0)
//     const [timer, setTimer] = useState(10)
//     const [text, setText] = useState('')
//     const timerRef = useRef(null)

//     const handleClick = () => {
//         setCount(prev => prev + 1)
//         startTimer()
//     }

//     const startTimer = () => {
//         if (timerRef.current !== null) return

//         const id = setInterval(() => {
//             setTimer(timer => {
//                 if (timer === 0) {
//                     clearInterval(id)
//                     return 0
//                 }
//                 return timer - 1
//             })
//         }, 1000)

//         timerRef.current = id
//     }

//     useEffect(() => {
//         return () => {
//             if (timerRef.current !== null) {
//                 clearInterval(timerRef.current)
//             }
//         }
//     }, [])

//     return (
//         <div>
//             <h1>Счетчик: {count}</h1>
//             <h2>Таймер: {timer}</h2>
//             {timer !== 0 ? <button onClick={handleClick}>Кнопка</button> : null}
//             <p>Здесь текст: {text}</p>
//             <div>
//                 <input value={text} type='password' placeholder='Введите текст' onChange={e => setText(e.target.value)}></input>
//             </div>
//         </div>
//     )
// }

// export default Counter



// import React, { useEffect, useState } from 'react'

// const Counter = () => {
//     const [users, setUsers] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const controller = new AbortController()

//         setLoading(true)
//         const fetchUsers = async () => {
//             try {
//                 const res = await fetch(`https://jsonplaceholder.typicode.com/users`, { signal: controller.signal })
//                 if (!res.ok) {
//                     throw new Error('Ошибка')
//                 }
//                 const users = await res.json()
//                 setUsers(users)
//             } catch (e) {
//                 setError(e)
//                 if (e.name === 'AbortError') {
//                     console.log(e.stack)
//                 }
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchUsers()

//         return () => controller.abort()
//     }, [])

//     return (
//         <div>
//             {loading && <div>loading...</div>}
//             {error && <div>{error.message}</div>}
//             {users && (
//                 <ul>
//                     {users.map((user) => (
//                         <li key={user.id}>
//                             <h3>{user.name}</h3>
//                             <p>{user.username}</p>
//                             <p>{user.email}</p>
//                         </li>))}
//                 </ul>
//             )}
//         </div>
//     )
// }

// export default Counter