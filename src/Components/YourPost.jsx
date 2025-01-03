import React, { useContext } from 'react'
import { postListContext } from '../Store/ProductListStore'
import Post from './Post'

const YourPost = () => {
  const { posts, UserID, isLoggedIn } = useContext(postListContext);
  const createdPosts = posts.filter(post => post.userId === UserID);

  return (
    <div className='Yourpost'>
      {isLoggedIn ? (createdPosts.map((post, index) => (
        <Post
          key={index}
          id={index}
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
