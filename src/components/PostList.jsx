import React, { useRef } from "react";
import styled from "styled-components";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const StyledTitle = styled.h1`
  text-align: center;
  color: #e74c3c;
  font-size: 2rem;
  margin: 20px 0;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(231, 76, 60, 0.3);
  letter-spacing: 1px;
`;

const PostList = ({ posts, title, remove }) => {
  const nodeRefs = useRef({});

  if (!posts.length) {
    return <StyledTitle>Посты не найдены!</StyledTitle>;
  }

  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <TransitionGroup>
        {posts.map((post, index) => {
          if (!nodeRefs.current[post.id]) {
            nodeRefs.current[post.id] = React.createRef();
          }

          return (
            <CSSTransition
              key={post.id}
              nodeRef={nodeRefs.current[post.id]}
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