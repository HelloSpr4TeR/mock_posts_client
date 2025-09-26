import React from 'react'

const UserEmail = ({ userEmail }) => {
    return (
        <div>{userEmail}</div>
    )
}

export default UserEmail


// const Training = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         if (!res.ok) {
//           throw new Error("Error");
//         }
//         const data = await res.json();
//         setUsers(data);
//       } catch (e) {
//         console.log(e.message);
//       }
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>
//               <UserName userName={<h3>{user.name}</h3>} />
//               <UserUserName userUserName={<p>{user.username}</p>} />
//               <UserEmail userEmail={<p>{user.email}</p>} />
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Training;