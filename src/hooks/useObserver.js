import { useEffect, useRef } from "react";


export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        const cb = (entries) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        };

        observer.current = new IntersectionObserver(cb);
        if (ref.current) {
            observer.current.observe(ref.current);
        }

        return () => observer.current?.disconnect();
    }, [isLoading, ref, canLoad, callback]);
};


// import React, { useEffect, useRef, useState } from 'react'

// const Training = () => {
//   const [posts, setPosts] = useState([])
//   const [error, setError] = useState(null)
//   const [isLoad, setLoad] = useState(false)
//   const [limit, setLimit] = useState(10)
//   const [curPage, setCurPage] = useState(1)
//   const lastElem = useRef(null)
//   const observer = useRef();
//   const totalRef = useRef(null)

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoad(true)
//       try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${curPage}`)
//         if (!res.ok) {
//           throw new Error('Ошибка')
//         }
//         const totalCount = res.headers.get('x-total-count')
//         totalRef.current = Number(totalCount)
//         const data = await res.json()
//         setPosts(prev => [...prev, ...data])
//       } catch (e) {
//         setError(e.message)
//       } finally {
//         setLoad(false)
//       }
//     }

//     fetchPosts()
//   }, [limit, curPage])

//   const canLoad = curPage < Math.ceil(totalRef.current / limit)

//   useEffect(() => {
//     if (isLoad) return;
//     if (observer.current) observer.current.disconnect();

//     const cb = (entries) => {
//       if (entries[0].isIntersecting && canLoad) {
//         setCurPage(prev => prev + 1);
//       }
//     };

//     observer.current = new IntersectionObserver(cb);
//     if (lastElem.current) {
//       observer.current.observe(lastElem.current);
//     }

//     return () => observer.current?.disconnect();
//   }, [isLoad, lastElem, canLoad, curPage]);

//   useEffect(() => {
//     setPosts([]);
//     setCurPage(1);
//   }, [limit]);

//   return (
//     <div>
//       <select value={limit} onChange={e => setLimit(Number(e.target.value))}>
//         <option disabled>Выбрать лимит</option>
//         <option value={5}>5</option>
//         <option value={10}>10</option>
//         <option value={25}>25</option>
//         <option value={totalRef.current}>Все</option>
//       </select>
//       {error && <div>Ошибка: {error}</div>}
//       {isLoad && <div>Загрузка</div>}
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <h1>{post.id}: {post.title}</h1>
//             <h2>{post.body}</h2>
//           </li>
//         ))}
//       </ul>
//       <div ref={lastElem} style={{ border: '10px solid blue' }} />
//     </div>
//   )
// }

// export default Training