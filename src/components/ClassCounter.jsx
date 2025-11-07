import React from 'react';

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default ClassCounter;

// import React, { useEffect, useState } from 'react'

// const Training = () => {
//   const [taskName, setTaskName] = useState('')
//   const [taskDescr, setTaskDecr] = useState('')
//   const [tasks, setTasks] = useState(() => {
//     const saved = localStorage.getItem('tasks')
//     return saved ? JSON.parse(saved) : []
//   })
//   const [search, setSearch] = useState('')
//   const [options, setOptions] = useState('')
//   const [isBondage, setBondage] = useState(false)
//   const [filtBond, setFiltBond] = useState(false)

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks))
//   }, [tasks])

//   const createTask = (e) => {
//     e.preventDefault()
//     setTasks(prev => [{
//       id: Date.now(),
//       name: taskName,
//       descr: taskDescr,
//       checked: false,
//       bondage: isBondage
//     }, ...prev])

//     setBondage(false)
//     setTaskName('')
//     setTaskDecr('')
//   }

//   const dis = (taskName && taskDescr)

//   const toggle = (id) => {
//     setTasks(prev => prev.map(task => {
//       return task.id === id ? { ...task, checked: !task.checked } : task
//     }))
//   }

//   const deleteTask = (id) => {
//     setTasks(prev => prev.filter(task => {
//       return task.id !== id
//     }))
//   }


//   const filterOptions = tasks.filter(task => {
//     if (options === 'compl') return task.checked
//     if (options === 'not compl') return !task.checked
//     return true
//   })

//   const filtered = filterOptions.filter(task => {
//     return task.name.toLowerCase().includes(search.toLowerCase())
//   })

//   const bondageFilter = filtered.filter(task => {
//     if (filtBond) return task.bondage
//     return true
//   })

//   return (
//     <div>
//       <div>
//         <input value={search} placeholder='Найти задачу' onChange={e => setSearch(e.target.value)} />
//       </div>
//       <div>Показать с бондажом<input type='checkbox'
//         checked={filtBond}
//         onChange={e => setFiltBond(e.target.checked)} />
//       </div>
//       <div>
//         <select value={options} onChange={e => setOptions(e.target.value)}>
//           <option value='' >Все</option>
//           <option value='compl'>Выполненные</option>
//           <option value='not compl'>Не выполненные</option>
//         </select>
//       </div>
//       <form onSubmit={createTask}>
//         <input placeholder='Название задачи'
//           value={taskName}
//           onChange={e => setTaskName(e.target.value)} />
//         <textarea style={{ margin: '5px' }}
//           value={taskDescr}
//           placeholder='Описание задачи'
//           onChange={e => setTaskDecr(e.target.value)} />
//         <div>With bondage: <input
//           type='checkbox'
//           checked={isBondage}
//           onChange={e => setBondage(e.target.checked)} /></div>
//         <button disabled={!dis}>Создать задачу</button>
//       </form>
//       <ul>
//         {bondageFilter.map(task => (
//           <li key={task.id}>
//             <h4>{task.name}</h4>
//             <p>{task.descr}</p>
//             <p>{task.bondage ? 'true' : 'false'}</p>
//             <div>
//               <input type='checkbox' checked={task.checked} onChange={() => toggle(task.id)} />
//             </div>
//             <button onClick={() => deleteTask(task.id)}>Удалить</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Training