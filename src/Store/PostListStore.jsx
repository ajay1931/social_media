import React, { useState, createContext, useEffect } from 'react'
import toast from 'react-hot-toast';

const POST_LIST = [
    {
        "title": "Trucking Through the Himalayas",
        "body": "Embarking on an adventurous trucking journey through the rugged terrains of the Himalayas, experiencing the raw beauty of the mountains.",
        "reactions": 395,
        "userName": "James",
        "tags": ["himalayas", "trucking", "adventure"],
        "img": "https://www.himalayanst.com/uploads/socialmedia/trek-in-himalaya-8-best-trekking-in-himalayas-.png",
        "comments": [
            { "userName": "Michel", "comment": "Trucking in the Himalayas must be an exhilarating experience! Stay safe!" },
            { "userName": "Hendry", "comment": "Wow, those mountain views are incredible! How’s the road up there?" }
        ]
    },
    {
        "title": "A Peaceful Retreat in Kyoto",
        "body": "Spending time in Kyoto for a peaceful retreat among the temples and nature.",
        "reactions": 47,
        "userName": "Frank",
        "tags": ["kyoto", "temples", "peace"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40_x_UeSJHEz5I7SKXC5fEZrkZSFiuL1JAw&s",
        "comments": [
            { "userName": "Alice", "comment": "Wow, Kyoto is such a beautiful place!" },
            { "userName": "Charlie", "comment": "I miss the serene atmosphere of Kyoto’s temples." },
            { "userName": "Grace", "comment": "The temples are so peaceful. Wish I could visit!" }
        ]
    },
    {
        "title": "Going To Chennai",
        "body": "Going to Chennai for my vacation.",
        "reactions": 62,
        "userName": "Hank",
        "tags": ["chennai", "vacation", "marina"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcwsfSsFVjmg3KmiSISqx0jyvS3qbPluoZw&s",
        "comments": [
            { "userName": "Bob", "comment": "Enjoy your trip! Try the local food!" }
        ]
    },
    {
        "title": "Camping Under the Northern Lights",
        "body": "Spent an unforgettable night camping under the mesmerizing Northern Lights, surrounded by snow-capped mountains and the stillness of nature.",
        "reactions": 250,
        "userName": "Sarah",
        "tags": ["northern lights", "camping", "nature"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYqXeXVurkCUMZvg9YKgp9B7Z1sTWtdv6Tw&s",
        "comments": [
            { "userName": "John", "comment": "That must have been an incredible experience!" },
            { "userName": "Rachel", "comment": "I’ve always wanted to see the Northern Lights in person!" },
            { "userName": "David", "comment": "Sounds magical! Hope you got some amazing photos!" }
        ]
    },
    {
        "title": "Sunday Morning Run",
        "body": "Just completed my morning 5k, feeling refreshed!",
        "reactions": 10,
        "userName": "Alice",
        "tags": ["fitness", "morning", "run"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvl6UhJmeTCHo_gpCR8Dn-9HESsPWfXr2Ng&s",
        "comments": []
    },
    {
        "title": "Cooking Up Some Pasta",
        "body": "Tried a new recipe for pasta today, it turned out delicious!",
        "reactions": 25,
        "userName": "Grace",
        "tags": ["cooking", "pasta", "recipe"],
        "img": "https://media.istockphoto.com/id/1468323572/photo/close-up-photo-of-mans-hands-serving-pasta-with-fresh-vegetables.jpg?s=612x612&w=0&k=20&c=lKioto9L6rcIm7Hiw5A8q6cAac56ja0V0w579tmFmxk=",
        "comments": [
            { "userName": "Hank", "comment": "Share the recipe! Looks tasty!" }
        ]
    },
    {
        "title": "Backyard Gardening",
        "body": "My tomatoes and basil are finally thriving!",
        "reactions": 5,
        "userName": "Karen",
        "tags": ["gardening", "plants", "organic"],
        "img": "https://media.istockphoto.com/id/1323663582/photo/child-and-mother-gardening-in-vegetable-garden-in-backyard.jpg?s=612x612&w=0&k=20&c=wRB5VNXfndrbXCl-9A02pwOYuL0kBJBn6wHbslSn8_M=",
        "comments": [
            { "userName": "Charlie", "comment": "Gardening is so therapeutic!" }
        ]
    },
    {
        "title": "Beach Day!",
        "body": "Spent the whole day relaxing by the sea.",
        "reactions": 30,
        "userName": "Leo",
        "tags": ["beach", "sea", "relaxation"],
        "img": "https://www.dickssportinggoods.com/protips/sports-and-activities/family-fun/pack-day-beach/_jcr_content/root/container/container_2/image.coreimg.jpeg/1667590180923/beachchecklist.jpeg",
        "comments": [
            { "userName": "Alice", "comment": "That’s the best way to spend a day!" }
        ]
    },
    {
        "title": "Coffee Time",
        "body": "Trying out a new local cafe - the coffee is amazing!",
        "reactions": 18,
        "userName": "Nancy",
        "tags": ["coffee", "cafe", "local"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzEwwP0GlUvVf482SMzV4NoNqtEc7Gs1Gdw&s",
        "comments": [
            { "userName": "David", "comment": "I need to check that place out!" },
            { "userName": "Frank", "comment": "Nothing beats a good cup of coffee!" },
            { "userName": "Hank", "comment": "Coffee is life!" }
        ]
    },
    {
        "title": "Exploring the Streets of Paris",
        "body": "Spending some time in Paris, exploring its beautiful streets and cafes.",
        "reactions": 92,
        "userName": "David",
        "tags": ["paris", "travel", "streets"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_mX9nhQF7mly1iFFK_2rr84rCnUhvYYdAA&s",
        "comments": [
            { "userName": "Grace", "comment": "Paris is magical, enjoy your time!" }
        ]
    },
    {
        "title": "Backpacking Through Thailand",
        "body": "Starting my backpacking journey through Thailand, excited for the adventure ahead!",
        "reactions": 200,
        "userName": "Jack",
        "tags": ["thailand", "backpacking", "adventure"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgCI6arpj462-W41Ws6Cou_QchnxqqKdzeQ&s",
        "comments": [
            { "userName": "Nancy", "comment": "Thailand is so diverse! Enjoy the journey!" },
            { "userName": "Bob", "comment": "Have fun! Don’t forget to try street food!" }
        ]
    },
    {
        "title": "Weekend Getaway to London",
        "body": "Visiting London for a weekend of sightseeing and exploring new places.",
        "reactions": 120,
        "userName": "Bob",
        "tags": ["london", "weekend", "sightseeing"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtE_bwnXwIljGQwwHD2fneoH4SZ22s6wViJw&s",
        "comments": [
            { "userName": "Charlie", "comment": "London is amazing! Have a great trip!" }
        ]
    },
    {
        "title": "A Day in New York City",
        "body": "Walking around New York City, taking in the sights and the hustle and bustle.",
        "reactions": 150,
        "userName": "Mona",
        "tags": ["new york", "city", "adventure"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l4rUd5bXh7PM_7SjBU6hTtBsMPEix1HWnA&s",
        "comments": []
    },
    {
        "title": "Morning Jog in the Park",
        "body": "Enjoying a peaceful jog in the park to start the day fresh and energized.",
        "reactions": 45,
        "userName": "user-1",
        "tags": ["jog", "morning", "park"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXEf8OhJ7TgpWKgwxaUSOhV_N15xmHqOCZA&s",
        "comments": [
            { "userName": "Frank", "comment": "That’s a great way to start the day!" },
            { "userName": "Leo", "comment": "Keep up the fitness streak!" }
        ]
    },
    {
        "title": "Reading a New Book",
        "body": "Currently reading a fascinating book about technology and innovation.",
        "reactions": 30,
        "userName": "user-2",
        "tags": ["reading", "book", "technology"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXBLK8UomZ40Z5DwmABl_aP73nkNYOhI27w&s",
        "comments": [
            { "userName": "Charlie", "comment": "What’s the book called? Sounds interesting!" },
            { "userName": "Nancy", "comment": "I love tech books! Any recommendations?" }
        ]
    }
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
    const [posts, setPosts] = useState(() => {
        const localPosts = JSON.parse(localStorage.getItem('posts')) || [];
        const combinedPosts = [...POSTS_WITH_IDS, ...localPosts.filter(
            (localPost) => !POSTS_WITH_IDS.some((initialPost) => initialPost.userId === localPost.userId)
        )];
        return combinedPosts;

    });
    const [userName, setuserName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'posts') {
                const updatedPosts = JSON.parse(localStorage.getItem('posts')) || [];
                setPosts([
                    ...POSTS_WITH_IDS,
                    ...updatedPosts.filter(
                        (localPost) => !POSTS_WITH_IDS.some((initialPost) => initialPost.userId === localPost.userId)
                    )
                ]);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    let deletePost = (id) => {
        const updatedPosts = posts.filter(post => post.userId !== id);

        const newPostsForStorage = updatedPosts.filter(
            (post) => !POSTS_WITH_IDS.some((initialPost) => initialPost.userId === post.userId)
        );
        localStorage.setItem('posts', JSON.stringify(newPostsForStorage));

        setPosts(updatedPosts)
        toast.error('Post deleted sucessfully')
    }

    const addPost = (newPost) => {
        const postWithId = { ...newPost, userId: generateRandomId() };
        const updatedPosts = [postWithId, ...posts];

        const newPostsForStorage = [postWithId, ...(JSON.parse(localStorage.getItem('posts')) || [])];
        localStorage.setItem('posts', JSON.stringify(newPostsForStorage));

        setPosts(updatedPosts);
        toast.success('Post added successfully');
    };

    const updateReaction = (id) => {
        const updatedPosts = posts.map((post) =>
            post.userId === id ? { ...post, reactions: post.reactions + 1 } : post
        );

        const newPostsForStorage = updatedPosts.filter(
            (post) => !POSTS_WITH_IDS.some((initialPost) => initialPost.userId === post.userId)
        );

        localStorage.setItem('posts', JSON.stringify(newPostsForStorage));
        setPosts(updatedPosts);
    }

    const editPost = (id, editedPosts) => {
        const updatedPosts = posts.map((post) =>
            post.userId === id ? { ...post, ...editedPosts } : post
        );

        const newPostsForStorage = updatedPosts.filter(
            (post) => !POSTS_WITH_IDS.some((initialPost) => initialPost.userId === post.userId)
        );

        localStorage.setItem('posts', JSON.stringify(newPostsForStorage));
        setPosts(updatedPosts);
        toast.success('Post updated successfully');
    };

    const addComment = (id, commentData) => {
        const updateComment = posts.map((post) =>
            post.userId === id ?{ ...post, comments: [...post.comments, commentData] } : post
        );

        const newPostsForStorage =updateComment.filter(
            (post) =>!POSTS_WITH_IDS.some((initialPost)=>initialPost.userId === post.userId)
        );

        localStorage.setItem('posts',JSON.stringify(newPostsForStorage));
        setPosts(updateComment);
        toast.success('comment added successfully')
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
            editPost,
            addComment,
        }}>
            {children}
        </postListContext.Provider>
    )
}

export default PostListStore
