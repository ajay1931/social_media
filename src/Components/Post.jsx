import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postListContext } from '../Store/PostListStore';
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa6";
import toast from 'react-hot-toast';

const Post = () => {
    const { id } = useParams();
    const { posts, updateReaction, deletePost, editPost, isLoggedIn, userName, addComment, postVisibility } = useContext(postListContext);
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (posts.length > 0 || 0) {
            const selectedPost = posts.find(p => p.userId == id);
            setPost(selectedPost || null);
        }
    }, [id, posts]);

    if (!post) {
        return <p>Post not found!</p>;
    }

    const handleEdit = () => {
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

    const handleHide = (id) => {
        postVisibility(id);
        window.confirm('Are you sure want to hide this post');
        toast.success('post hide successfully');
    };

    const handleUnHide = (id) => {
        postVisibility(id);
        window.confirm('Are you sure want to show this post');
        toast.success('post unhide successfully');
    }

    return (
        <div className="post-detail">
            <div className="post-content">
                {/* Left side */}
                {post.img && (
                    <div className="post-img">
                        <img src={post.img} alt={post.title} />
                    </div>
                )}

                {/* Right side */}
                <div className="post-details">
                    <h2 className='post-details-h2'>{post.userName} </h2>
                    <h4>{post.title}</h4>
                    <h6>{post.body}</h6>
                    <p>Tags: {post.tags.join(", ")}</p>
                    <span className="reactions">
                        <FcLike onClick={() => updateReaction(id)} />
                        <p>{post.reactions}</p>
                        <FaRegCommentDots />
                        <p>{post.comments.length || 0}</p>
                    </span>
                    <p>Posted on: {post.time}</p>

                    {isLoggedIn && post.userName === userName ? (
                        <div className="post-actions">
                            <button className="btn btn-warning m-2" onClick={handleEdit}>Edit</button>
                            <button className="btn btn-danger m-2" onClick={handleDelete}>Delete</button>
                            <button className="btn btn-info m-2" onClick={handleAddComment}>Comment</button>
                            {post.isVisible ? (
                                <button className='btn btn-secondary' onClick={() => handleHide(id)}> Hide</button>
                            ) : (
                                <button className='btn btn-secondary' onClick={() => handleUnHide(id)}> Unhide</button>
                            )}
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
            </div>
        </div>
    );
};

export default Post;
