import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import MySelect from '../components/UI/select/MySelect';
import { useObserver } from '../hooks/useObserver';
import { usePosts } from '../hooks/usePosts';
import { fetchPosts, createPost, removePost, setFilter, setModal, setLimit, setPage, }
  from '../store/slices/PostsSlice';

function Posts() {
  const dispatch = useDispatch();
  const {
    posts,
    filter,
    modal,
    totalPages,
    limit,
    page,
    isLoading,
    error,
  } = useSelector((state) => state.posts);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  useObserver(lastElement, page < totalPages, isLoading, () => {
    dispatch(setPage(page + 1));
  });

  useEffect(() => {
    dispatch(fetchPosts({ limit, page }));
  }, [page, limit, dispatch]);

  const handleCreate = (newPost) => {
    dispatch(createPost(newPost));
  };

  const handleRemove = (post) => {
    dispatch(removePost(post));
  };

  return (
    <div className='App'>
      <MyButton style={{ marginTop: 30 }} onClick={() => dispatch(setModal(true))}>
        Создать пост
      </MyButton>

      <MyModal visible={modal} setVisible={(val) => dispatch(setModal(val))}>
        <PostForm create={handleCreate} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={(val) => dispatch(setFilter(val))} />

      <MySelect
        value={limit}
        onChange={(val) => dispatch(setLimit(val))}
        defaultValue='Кол-во постов на странице'
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' },
        ]}
      />

      {error && <h1>Произошла ошибка: {error}</h1>}

      <PostList remove={handleRemove} posts={sortedAndSearchedPosts} title='Посты' />

      <div ref={lastElement} style={{ height: 20, background: 'red' }} />

      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      )}

      <Pagination page={page} changePage={(p) => dispatch(setPage(p))} totalPages={totalPages} />
    </div>
  );
}

export default Posts;