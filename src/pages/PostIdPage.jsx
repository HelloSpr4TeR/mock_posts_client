import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/PostIdPage.css';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id)
      setComments(response.data);
  })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [params.id])

  return (
    <div className="post-page">
        <h1 className="post-page__title">Вы открыли пост с ID = {params.id}</h1>
        {isLoading
        ? <Loader/>
        : <div className="post-page__content">{post.id}. {post.title}</div>
        }
        <h1 className="comments__title">
          Комментарии
        </h1>
        {isComLoading
        ? <Loader/>
        : <div className="comments">
            {comments.map(comm => (
            <div key={comm.id} className="comment">
                <h5 className="comment__email">{comm.email}</h5>
                <div className="comment__body">{comm.body}</div>
            </div>
            ))}
        </div>
        }
    </div>
  )
}

export default PostIdPage;