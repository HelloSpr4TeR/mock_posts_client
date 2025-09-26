import React, { useEffect, useState } from "react";
import Accordeon from "./Training/Accordeon";

const Training = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (!res.ok) {
          throw new Error("Error");
        }
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {posts.length && (
        <Accordeon>
          {posts.map((post) => (
            <div key={post.id}>
              <Accordeon.title>{post.title}</Accordeon.title>
              <Accordeon.body>{post.body}</Accordeon.body>
            </div>
          ))}
        </Accordeon>
      )}
    </>
  );
};

export default Training;
