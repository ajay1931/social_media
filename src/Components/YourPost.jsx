import React, { useContext } from 'react'
import { postListContext } from '../Store/PostListStore'
import Posts from './Posts';

const YourPost = () => {
  const { posts, userName, isLoggedIn } = useContext(postListContext);
  const createdPosts = posts.filter(post => post.userName === userName);

  return (
    <div className='Yourpost'>
      {isLoggedIn ? (createdPosts.map((post, index) => (
        <Posts
          key={index}
          id={post.userId}
          title={post.title}
          body={post.body}
          reactions={post.reactions}
          tags={post.tags}
        />))
      ) : (
        <p className='Yourpost-para'>Create post</p>)
      }
    </div>
  )
}

export default YourPost
