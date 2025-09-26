
const User = ({ user, userTitle }) => {
    return (
        <div>{userTitle({ user })}</div>
    )
}

export default User


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

//   const userTitle = ({ user }) => {
//     return (
//       <>
//         <h3>{user.name}</h3>
//         <h4>{user.username}</h4>
//         <h5>{user.email}</h5>
//       </>
//     )
//   }

//   const userAddress = ({ user }) => {
//     return (
//       <>
//         <p>{user.address.street}</p>
//         <p>{user.address.suite}</p>
//         <p>{user.address.city}</p>
//         <p>{user.address.zipcode}</p>
//       </>
//     )
//   }

//   const userCompany = ({ user }) => {
//     return (
//       <>
//         <p>{user.company.name}</p>
//         <p>{user.company.catchPhrase}</p>
//         <p>{user.company.bs}</p>
//       </>
//     )
//   }

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>
//               <User user={user} userTitle={userTitle} />
//               <UserAddress user={user} userAddress={userAddress} />
//               <UserCompany user={user} userCompany={userCompany} />
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Training;