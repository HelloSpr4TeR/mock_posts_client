import React, { useRef } from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  // Создаём объект refs для хранения ссылок на DOM-элементы
  const nodeRefs = useRef({});

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          if (!nodeRefs.current[post.id]) {
            nodeRefs.current[post.id] = React.createRef(); // Создаём ref, если его ещё нет
          }

          return (
            <CSSTransition
              key={post.id}
              nodeRef={nodeRefs.current[post.id]} // Передаём ref
              timeout={500}
              classNames="post"
            >
              <div ref={nodeRefs.current[post.id]}>
                <PostItem remove={remove} number={index + 1} post={post} />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;