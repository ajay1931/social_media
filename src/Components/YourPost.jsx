import React, { useContext } from 'react'
import { postListContext } from '../Store/ProductListStore'
import Post from './Post'

const YourPost = () => {
  const { posts } = useContext(postListContext);
  const createdPosts = posts.filter(post => post.isUserCreated);

  return (
    <div className='Yourpost'>
      {createdPosts.length > 0 ? (createdPosts.map((post, index) => (
          <Post
            key={index}
            id={index}
            title={post.title}
            body={post.body}
            reactions={post.reactions}
            tags={post.tags}
          /> ))
      ) : (
        <p className='Yourpost-para'>Create post</p>)
      }
    </div>
  )
}

export default YourPost
