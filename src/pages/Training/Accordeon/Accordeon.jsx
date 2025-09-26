import React from "react";
import AccordeonBody from "./AccordeonBody";
import AccordeonTitle from "./AccordeonTitle";

const Accordeon = ({ children }) => {
  return <ul>{children}</ul>;
};

Accordeon.Title = AccordeonTitle;
Accordeon.Body = AccordeonBody;

export default Accordeon;

// import React, { useEffect, useState } from "react";
// import Accordeon from "./Training/Accordeon/Accordeon";


// const Training = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//         if (!res.ok) {
//           throw new Error("Error");
//         }
//         const data = await res.json();
//         setPosts(data);
//       } catch (e) {
//         console.log(e.message);
//       }
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <>
//       {posts.length > 0 && (
//         <Accordeon>
//           {posts.map((post) => (
//             <li key={post.id}>
//               <Accordeon.Title>{post.title}</Accordeon.Title>
//               <Accordeon.Body>{post.body}</Accordeon.Body>
//             </li>
//           ))}
//         </Accordeon>
//       )}
//     </>
//   );
// };

// export default Training;