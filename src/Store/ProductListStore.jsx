import React, { useState, createContext, Children } from 'react'
import toast from 'react-hot-toast';

const POST_LIST = [
    {
        title: "A Peaceful Retreat in Kyoto",
        body: "Spending time in Kyoto for a peaceful retreat among the temples and nature.",
        reactions: 80,
        userId: "user-14",
        tags: ["kyoto", "temples", "peace"]
    },
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
        userId: "user-10",
        tags: ["coffee", "cafe", "local"],
    },
    {
        title: "Exploring the Streets of Paris",
        body: "Spending some time in Paris, exploring its beautiful streets and cafes.",
        reactions: 92,
        userId: "user-11",
        tags: ["paris", "travel", "streets"]
    },
    {
        title: "Backpacking Through Thailand",
        body: "Starting my backpacking journey through Thailand, excited for the adventure ahead!",
        reactions: 200,
        userId: "user-15",
        tags: ["thailand", "backpacking", "adventure"]
    },
    {
        title: "Weekend Getaway to London",
        body: "Visiting London for a weekend of sightseeing and exploring new places.",
        reactions: 120,
        userId: "user-12",
        tags: ["london", "weekend", "sightseeing"]
    },
    {
        title: "A Day in New York City",
        body: "Walking around New York City, taking in the sights and the hustle and bustle.",
        reactions: 150,
        userId: "user-13",
        tags: ["new york", "city", "adventure"]
    },
    {
        title: "Morning Jog in the Park",
        body: "Enjoying a peaceful jog in the park to start the day fresh and energized.",
        reactions: 45,
        userId: "user-1",
        tags: ["jog", "morning", "park"]
    },
    {
        title: "Reading a New Book",
        body: "Currently reading a fascinating book about technology and innovation.",
        reactions: 30,
        userId: "user-2",
        tags: ["reading", "book", "technology"]
    },

]

export const postListContext = createContext({
    posts: [],
    addPost: () => { },
    deletePost: () => { },
    UserID: '',
    setUserID: () => { },
    setIsLoggedIn: () => { },
});

const ProductListStore = ({ children }) => {
    const [posts, setPosts] = useState(POST_LIST);
    const [UserID, setUserID] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    let deletePost = (id) => {
        setPosts(posts.filter((post, index) => index !== id))
        toast.error('Post deleted sucessfully')
    }

    let addPost = (newPost) => {
        setPosts([newPost, ...posts])
        toast.success('Post added sucessfully')
    }

    return (
        <postListContext.Provider value={{ posts, addPost, deletePost, UserID, setUserID, isLoggedIn, setIsLoggedIn }}>
            {children}
        </postListContext.Provider>
    )
}

export default ProductListStore
