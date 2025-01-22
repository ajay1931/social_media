import React, { useContext } from 'react'
import { postListContext } from '../Store/PostListStore'
import PostList from './PostList'

const Home = () => {
    const { posts } = useContext(postListContext)
    const visiblePosts = posts.filter(post => post.isVisible); 

    return (
        <div className='Home'>
            {visiblePosts.map((post, index) => (
                <PostList
                    key={index}
                    userName={post.userName}
                    id={post.userId}
                    title={post.title}
                    reactions={post.reactions}
                    tags={post.tags}
                    img={post.img}
                    comments={post.comments}
                    time={post.time}
                />
            ))}
        </div>
    )
}

export default Home
