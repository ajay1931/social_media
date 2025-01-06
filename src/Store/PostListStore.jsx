import React, { useState, createContext } from 'react'
import toast from 'react-hot-toast';

const POST_LIST = [
    {
        title: "A Peaceful Retreat in Kyoto",
        body: "Spending time in Kyoto for a peaceful retreat among the temples and nature.",
        reactions: 80,
        userName: "Frank",
        tags: ["kyoto", "temples", "peace"]
    },
    {
        title: "Going To Chennai",
        body: "Going to Chennai for my vacation",
        reactions: 62,
        userName: "Hank",
        tags: ["chennai", "vacation", "marina"],
    },
    {
        title: "Exploring the Himalayas",
        body: "Finally heading to the mountains for some peace and adventure.",
        reactions: 115,
        userName: "Charlie",
        tags: ["himalayas", "adventure", "mountains"],
    },
    {
        title: "Sunday Morning Run",
        body: "Just completed my morning 5k, feeling refreshed!",
        reactions: 10,
        userName: "Alice",
        tags: ["fitness", "morning", "run"],
    },
    {
        title: "Cooking Up Some Pasta",
        body: "Tried a new recipe for pasta today, it turned out delicious!",
        reactions: 25,
        userName: "Grace",
        tags: ["cooking", "pasta", "recipe"],
    },
    {
        title: "Backyard Gardening",
        body: "My tomatoes and basil are finally thriving!",
        reactions: 5,
        userName: "Karen",
        tags: ["gardening", "plants", "organic"],
    },
    {
        title: "Beach Day!",
        body: "Spent the whole day relaxing by the sea.",
        reactions: 30,
        userName: "Leo",
        tags: ["beach", "sea", "relaxation"],
    },
    {
        title: "Coffee Time",
        body: "Trying out a new local cafe - the coffee is amazing!",
        reactions: 18,
        userName: "Nancy",
        tags: ["coffee", "cafe", "local"],
    },
    {
        title: "Exploring the Streets of Paris",
        body: "Spending some time in Paris, exploring its beautiful streets and cafes.",
        reactions: 92,
        userName: "David",
        tags: ["paris", "travel", "streets"]
    },
    {
        title: "Backpacking Through Thailand",
        body: "Starting my backpacking journey through Thailand, excited for the adventure ahead!",
        reactions: 200,
        userName: "Jack",
        tags: ["thailand", "backpacking", "adventure"]
    },
    {
        title: "Weekend Getaway to London",
        body: "Visiting London for a weekend of sightseeing and exploring new places.",
        reactions: 120,
        userName: "Bob",
        tags: ["london", "weekend", "sightseeing"]
    },
    {
        title: "A Day in New York City",
        body: "Walking around New York City, taking in the sights and the hustle and bustle.",
        reactions: 150,
        userName: "Mona",
        tags: ["new york", "city", "adventure"]
    },
    {
        title: "Morning Jog in the Park",
        body: "Enjoying a peaceful jog in the park to start the day fresh and energized.",
        reactions: 45,
        userName: "user-1",
        tags: ["jog", "morning", "park"]
    },
    {
        title: "Reading a New Book",
        body: "Currently reading a fascinating book about technology and innovation.",
        reactions: 30,
        userName: "user-2",
        tags: ["reading", "book", "technology"]
    },

]

export const postListContext = createContext({
    posts: [],
    addPost: () => { },
    deletePost: () => { },
    userName: '',
    setuserName: () => { },
    setIsLoggedIn: () => { },
});

const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
};

const POSTS_WITH_IDS = POST_LIST.map(post => ({
    ...post,
    userId: generateRandomId()
}));

const PostListStore = ({ children }) => {
    const [posts, setPosts] = useState(POSTS_WITH_IDS);
    const [userName, setuserName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let deletePost = (id) => {
        setPosts(posts.filter(post => post.userId !== id))
        toast.error('Post deleted sucessfully')
    }

    const addPost = (newPost) => {
        const postWithId = { ...newPost, userId: generateRandomId() };
        setPosts([postWithId, ...posts]);
        toast.success('Post added successfully');
    };

    const updateReaction = (id) => {
        setPosts(posts.map((post) =>
            post.userId === id ? { ...post, reactions: post.reactions + 1 } : post
        ));
    }

    return (
        <postListContext.Provider value={{
            posts,
            addPost,
            deletePost,
            userName,
            setuserName,
            isLoggedIn,
            setIsLoggedIn,
            setPosts,
            updateReaction,
            generateRandomId,
        }}>
            {children}
        </postListContext.Provider>
    )
}

export default PostListStore
