import React, { useContext } from 'react'
import { postListContext } from '../Store/PostListStore'
import PostList from './PostList';

const YourPost = () => {
  const { posts, userName, isLoggedIn } = useContext(postListContext);
  const createdPosts = posts.filter(post => post.userName === userName);

  return (
    <div className='Yourpost'>
      {isLoggedIn ? (createdPosts.map((post, index) => (
        <div className='Yourpost-container' key={post.userId}>
          <PostList
            key={post.userId}
            id={post.userId}
            title={post.title}
            reactions={post.reactions}
            tags={post.tags}
            img={post.img}
            comments={post.comments}
          />
        </div>
      ))
      ) : (
        <p className='Yourpost-para'>Create post</p>)
      }
    </div>

  )
}

export default YourPost
