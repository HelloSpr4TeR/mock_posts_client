import React from 'react'

const Error = () => {
  return (
    <div>
      <h1 style={{ color: 'red' }}>
        Вы перешли на несуществующую страницу!
      </h1>
    </div>
  )
}

export default Error

import React, { useEffect, useRef, useState } from 'react';

import React from "react";

import React from "react";

// const MyInput = () => {
//     const [formValues, setFormValues] = React.useState({
//         name: "",
//         lastName: "",
//         isAgree: false,
//     });

//     const { name, lastName, isAgree } = formValues;

//     const isSubmitButtonDisabled = !(name && lastName && isAgree);

//     return (
//         <>
//             <h1>Disable button</h1>
//             <input
//                 value={name}
//                 onChange={(e) =>
//                     setFormValues((prev) => ({ ...prev, name: e.target.value }))
//                 }
//             />
//             <input
//                 value={lastName}
//                 onChange={(e) =>
//                     setFormValues((prev) => ({ ...prev, lastName: e.target.value }))
//                 }
//             />
//             <input
//                 checked={isAgree}
//                 type="checkbox"
//                 onChange={(e) =>
//                     setFormValues((prev) => ({ ...prev, isAgree: e.target.checked }))
//                 }
//             />
//             <button
//                 disabled={isSubmitButtonDisabled}
//                 onClick={() => console.log("submit")}
//             >
//                 submit
//             </button>
//         </>
//     );
// };

// export default MyInput;

// // суть этой задачи втом чтобы сделать чтобы
// // при заполнении инпутов и чекбокса кнопка стала активной

// import './../styles/chars.css';

// function getRandomElement16() {
//     return Math.floor(Math.random() * 16) + 1;
// }

// const Counter = () => {
//     const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

//     const [result, setResult] = useState(null);
//     const [mole, setMole] = useState(false);
//     const ref = useRef(null);

//     const startGame = () => {
//         function getRandomTimeUpTo2Seconds() {
//             return Math.random() * 2000;
//         }

//         const delay = getRandomTimeUpTo2Seconds();
//         ref.current = setTimeout(() => {
//             setResult(getRandomElement16());
//             setMole(true);
//         }, delay);
//     };

//     const boomStart = () => {
//         setMole(false);

//         function getRandomTimeUpTo2Seconds() {
//             return Math.random() * 2000;
//         }

//         const delay = getRandomTimeUpTo2Seconds();
//         ref.current = setTimeout(() => {
//             setResult(getRandomElement16());
//             setMole(true);
//         }, delay);
//     };

//     useEffect(() => {
//         return () => clearTimeout(ref.current);
//     }, []);

//     return (
//         <div className='container'>
//             <div className='chars'>
//                 {chars.map((item) =>
//                     <div className='item' key={item}>
//                         {result === item && mole
//                             ? <div className='mole' onClick={boomStart}>
//                                 крот
//                             </div>
//                             : null}
//                     </div>
//                 )}
//             </div>
//             <button onClick={startGame}>Начать игру</button>
//         </div>
//     );
// };

// export default Counter;