import React, { useContext } from 'react'
import { postListContext } from '../Store/PostListStore'
import Posts from './Posts'

const Home = () => {
    const { posts } = useContext(postListContext)
    return (
        <div className='Home'>
            {posts.map((post, index) => (
                <Posts
                    key={index}
                    id={index}
                    title={post.title}
                    body={post.body}
                    reactions={post.reactions}
                    tags={post.tags}
                    userId={post.userId}
                />
            ))}
        </div>
    )
}

export default Home
