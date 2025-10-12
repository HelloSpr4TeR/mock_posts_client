import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}

// import React, { useEffect, useState } from 'react'


// const Training = () => {
//   const [characters, setCharacters] = useState([])
//   const [isloading, setIsLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [searchName, setSearchName] = useState('')
//   const [checked, setChecked] = useState(false);

//   const fetchCharacters = async (name) => {
//     setIsLoading(true)
//     try {
//       if (searchName === '') return setCharacters([])
//       const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
//       if (!res.ok) {
//         throw new Error('Персонаж не найден')
//       }
//       const data = await res.json()
//       setCharacters(data.results)
//       setError(null)
//     } catch (e) {
//       setError(e.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   useEffect(() => {

//     const id = setTimeout(() => {

//       fetchCharacters(searchName)
//     }, 1000)

//     return () => clearTimeout(id)
//   }, [searchName])

//   const toggle = () => setChecked(!checked);

//   return (
//     <div>
//       <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={toggle}
//           style={{ display: "none" }}
//         />
//         <span
//           style={{
//             width: 18,
//             height: 18,
//             border: "2px solid #555",
//             borderRadius: 4,
//             display: "inline-block",
//             position: "relative",
//             backgroundColor: checked ? "#007bff" : "#fff",
//             transition: "background-color 0.2s, border-color 0.2s",
//           }}
//         >
//           {checked && (
//             <span
//               style={{
//                 width: 10,
//                 height: 10,
//                 borderRadius: "50%",
//                 backgroundColor: "#007bff",
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//               }}
//             />
//           )}
//         </span>
//         <span style={{ marginLeft: 8 }}>Я согласен</span>
//       </label>

//       <input
//         placeholder='Введите имя персонажа'
//         value={searchName}
//         onChange={e => setSearchName(e.target.value)} />
//       {error && <div>Ошибка: {error}</div>}
//       {isloading && <div>Загрузка...</div>}
//       {!error && !isloading &&
//         <ul>
//           {characters.map(character => (
//             <li key={character.id}>
//               {character.name}
//             </li>
//           ))}
//         </ul>}
//     </div>
//   )
// }

// export default Training