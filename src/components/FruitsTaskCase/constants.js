export const PRODUCTS = [
    { name: "apple", price: 10, count: 10 },
    { name: "banana", price: 20, count: 20 },
    { name: "orange", price: 30, count: 30 },
    { name: "bread", price: 50, count: 50 },
    { name: "milk", price: 60, count: 60 },
    { name: "eggs", price: 70, count: 70 },
    { name: "apple", price: 40, count: 40 },
    { name: "apple", price: 20, count: 15 },
    { name: "bread", price: 35, count: 10 },
];

export const FRUITS = ["apple", "banana", "orange"]

export const USERS = [
    {
        id: 1,
        name: "Иван",
        age: 28,
        email: "ivan@example.com",
        isActive: true,
        role: "admin"
    },
    {
        id: 2,
        name: "Мария",
        age: 24,
        email: "maria@example.com",
        isActive: false,
        role: "user"
    },
    {
        id: 3,
        name: "Алексей",
        age: 32,
        email: "aleksei@example.com",
        isActive: true,
        role: "moderator"
    },
    {
        id: 4,
        name: "Ольга",
        age: 29,
        email: "olga@example.com",
        isActive: true,
        role: "user"
    },
    {
        id: 5,
        name: "Дмитрий",
        age: 35,
        email: "dmitriy@example.com",
        isActive: false,
        role: "user"
    }
];

// const Training = () => {
//   const refText = useRef(null)
//   const editRef = useRef(null)
//   const [addText, setAddText] = useState([])

//   const addNewText = () => {
//     setAddText(prev => [{
//       id: Date.now(),
//       text: refText.current.value,
//       edit: false,
//       dis: false
//     }, ...prev])
//     setTimeout(() => { refText.current.value = '' })
//   }

//   const deleteText = (id) => {
//     setAddText(prev => prev.filter(item => {
//       return item.id !== id
//     }))
//   }

//   const editText = (id) => {
//     setAddText(prev => prev.map(item => {
//       if (item.id === id) {
//         item.text = editRef.current.value
//         editRef.current.value = ''
//         item.edit = !item.edit
//       } else {
//         item.dis = !item.dis
//       }
//       return item
//     }))
//   }

//   const editFlag = (id) => {
//     setAddText(prev => prev.map((item => {
//       if (item.id === id) {
//         item.edit = !item.edit
//       } else {
//         item.dis = !item.dis
//       }
//       return item
//     })))
//   }

//   return (
//     <div>
//       <input ref={refText} placeholder='напиши текст' />
//       <button onClick={addNewText}>Добавить текст в массив</button>
//       <ul>
//         {addText.map(item => (
//           <li key={item.id}>
//             <h4>{item.id}</h4>
//             <p>{item.text}</p>
//             {item.edit ?
//               <div>
//                 <input placeholder='Редактировать' ref={editRef} />
//                 <button onClick={() => editText(item.id)}>Сохранить</button>
//               </div>
//               : <button onClick={() => editFlag(item.id)} disabled={item.dis}>Редактировать</button>
//             }
//             <button onClick={() => deleteText(item.id)}>Удалить</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Training