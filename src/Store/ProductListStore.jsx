import React, { useState, createContext, Children } from 'react'
import Post from '../Components/Post';

const POST_LIST = [
    {
        title: "Going To Chennai",
        body: "Going to Chennai for my vacation",
        reactions: 62,
        userId: "user-3",
        tags: ["chennai", "vacation", "marina"],
    },
    {
        title: "Exploring the Himalayas",
        body: "Finally heading to the mountains for some peace and adventure.",
        reactions: 115,
        userId: "user-5",
        tags: ["himalayas", "adventure", "mountains"],
    },
    {
        title: "Sunday Morning Run",
        body: "Just completed my morning 5k, feeling refreshed!",
        reactions: 10,
        userId: "user-7",
        tags: ["fitness", "morning", "run"],
    },
    {
        title: "Art Exhibition Visit",
        body: "Visited the modern art exhibition, so inspiring!",
        reactions: 7,
        userId: "user-2",
        tags: ["art", "inspiration", "gallery"],
    },
    {
        title: "Cooking Up Some Pasta",
        body: "Tried a new recipe for pasta today, it turned out delicious!",
        reactions: 25,
        userId: "user-4",
        tags: ["cooking", "pasta", "recipe"],
    },
    {
        title: "Backyard Gardening",
        body: "My tomatoes and basil are finally thriving!",
        reactions: 5,
        userId: "user-8",
        tags: ["gardening", "plants", "organic"],
    },
    {
        title: "Beach Day!",
        body: "Spent the whole day relaxing by the sea.",
        reactions: 30,
        userId: "user-6",
        tags: ["beach", "sea", "relaxation"],
    },
    {
        title: "Coffee Time",
        body: "Trying out a new local cafe - the coffee is amazing!",
        reactions: 18,
        userId: "user-1",
        tags: ["coffee", "cafe", "local"],
    },
]

export const postListContext = createContext({
    posts:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const ProductListStore = ({ children }) => {
    const [posts, setPosts] = useState(POST_LIST);

    let deletePost = (id) => {
        setPosts(posts.filter((post, index) => index !== id))
    }

    let addPost = (newPost) => {
        setPosts([newPost, ...posts])
    }

    return (
        <postListContext.Provider value={{ posts, addPost, deletePost }}>
            {children}
        </postListContext.Provider>
    )
}

export default ProductListStore
