import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postListContext } from '../Store/PostListStore';
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa6";

const Post = () => {
    const { id } = useParams();
    const { posts, updateReaction, deletePost, editPost, isLoggedIn, userName, addComment } = useContext(postListContext);
    const [post, setPost] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        if (posts.length > 0) {
            const selectedPost = posts.find(p => p.userId == id);
            setPost(selectedPost || null);
        }
    }, [id, posts]);
    if (!post) {
        return <p>Post not found!</p>;
    }

    const handleEdit = (id) => {
        const updateTitle = prompt("Edit the post title:", post.title);
        const updateBody = prompt("Edit the post body:", post.body);
        const updateTag = prompt("Edit the post tag:", post.tags.join(","));

        if (updateTitle !== null && updateBody !== null && updateTag !== null) {
            editPost(post.userId, { title: updateTitle, body: updateBody, tags: updateTag.split(',') });
        }
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            deletePost(post.userId);
            navigate('/yourpost');
        }
    };

    const handleAddComment = () => {
        const commentBox = prompt('Enter your comment here:');
        if (commentBox && commentBox.trim() !== "") {
            addComment(post.userId, { userName, comment: commentBox });
        }
    };

    return (
        <div className="post-detail">
            <h2>{post.userName}</h2>
            {post.img && <img src={post.img} alt={post.title} style={{ width: "100%", maxHeight: "300px" }} />}
            <h4>{post.title}</h4>
            <h6>{post.body}</h6>
            <p>Tags: {post.tags.join(", ")}</p>
            <span className='reactions'>
                <FcLike onClick={() => updateReaction(id)} />
                <p style={{ paddingTop: '15px' }}>{post.reactions}</p>
                <FaRegCommentDots />
                <p style={{ paddingTop: '15px' }}>{post.comments.length || 0}</p>
            </span>
            {isLoggedIn && post.userName === userName ? (
                <div className="post-actions">
                    <button className="btn btn-warning m-2" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-danger m-2" onClick={handleDelete}>Delete</button>
                    <button className="btn btn-info m-2" onClick={handleAddComment}>Comment</button>
                </div>
            ) : (
                <button className="btn btn-info m-2" onClick={handleAddComment}>Comment</button>
            )}
            <div className="comments">
                <h5>Comments:</h5>
                {post.comments.map((comment, index) => (
                    <p key={index}><strong>{comment.userName}:</strong> {comment.comment}</p>
                ))}
            </div>
        </div>
    );
};

export default Post;
