import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/PostIdPage.css';

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
  })
  const [fetchComments, isComLoading] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [params.id, fetchPostById, fetchComments])

  return (
    <div className="post-page">
      <h1 className="post-page__title">Вы открыли пост с ID = {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div className="post-page__content">{post.id}. {post.title}</div>
      }
      <h1 className="comments__title">
        Комментарии
      </h1>
      {isComLoading
        ? <Loader />
        : <div className="comments">
          {comments.map(comm => (
            <div key={comm.id} className="comment">
              <h5 className="comment__email">{comm.email}</h5>
              <div className="comment__body">{comm.body}</div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default PostIdPage;

// import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// const TaskManager = () => {
//     const [taskName, setTaskName] = useState('')
//     const [tasks, setTasks] = useState(() => {
//         const savedTasks = localStorage.getItem('tasks')
//         return savedTasks ? JSON.parse(savedTasks) : []
//     })
//     const [taskFilter, setTaskFilter] = useState('')
//     const [time, setTime] = useState(0)
//     const refTime = useRef(null)

//     useEffect(() => {
//         startTime()

//         return () => clearInterval(refTime.current)
//     }, [])

//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(tasks))

//     }, [tasks])

//     const timerPause = () => {
//         if (refTime.current === null) return

//         clearInterval(refTime.current)
//         refTime.current = null
//     }

//     const timerContinue = () => {
//         if (refTime.current !== null) return

//         const id = setInterval(() => {
//             setTime(prev => prev + 1)
//         }, 1000)

//         refTime.current = id
//     }

//     const startTime = () => {
//         if (refTime.current !== null) return

//         const id = setInterval(() => {
//             setTime(prev => prev + 1)
//         }, 1000)

//         refTime.current = id
//     }

//     const createTask = (e) => {
//         e.preventDefault()
//         setTasks(prev => [{ id: Date.now(), name: taskName, checked: false }, ...prev])
//         setTaskName('')
//     }

//     const taskFiltered = useMemo(() => {
//         return tasks.filter((task) => {
//             if (taskFilter === 'compl') return task.checked
//             if (taskFilter === 'notCompl') return !task.checked
//             return true
//         })
//     }, [taskFilter, tasks])

//     const toggleTask = useCallback((id) => {
//         setTasks((tasks) => tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task))
//     }, [])

//     const deleteTask = (id) => {
//         return setTasks((tasks) => tasks.filter(task => task.id !== id))
//     }

//     return (
//         <div>
//             <div>Время: {time} секунд</div>
//             <button onClick={timerPause}>Пауза</button> <button onClick={timerContinue}>Продолжить</button>
//             <hr />
//             <form onSubmit={createTask}>
//                 <div>Добавить задачу: <input value={taskName} placeholder='Введите название'
//                     onChange={e => setTaskName(e.target.value)} required /> <button type='submit'>Добавить</button></div>
//             </form>
//             <div>Фильтр: <select value={taskFilter} onChange={e => setTaskFilter(e.target.value)}>
//                 <option value={''}>Все</option>
//                 <option value={'compl'}>Выполненные</option>
//                 <option value={'notCompl'}>Невыполненные</option>
//             </select>
//             </div>
//             <hr />
//             <ul>
//                 {taskFiltered.map(task =>
//                     <li key={task.id}>
//                         <p>{task.name}</p>
//                         <input type='checkbox' checked={task.checked} onChange={() => toggleTask(task.id)} />
//                         <button onClick={() => deleteTask(task.id)}>Удалить</button>
//                     </li>
//                 )}
//             </ul>
//         </div>
//     )
// }

// export default TaskManager