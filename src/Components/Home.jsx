import React, { useContext } from 'react'
import { postListContext } from '../Store/ProductListStore'
import Post from './Post'

const Home = () => {
    const { posts } = useContext(postListContext)
    return (
        <div className='Home'>
            {posts.map((post, index) => (
                <Post
                    key={index}
                    id={index}
                    title={post.title}
                    body={post.body}
                    reactions={post.reactions}
                    tags={post.tags}
                    userId={post.userId}
                ></Post>
            ))}
        </div>
    )
}

export default Home
