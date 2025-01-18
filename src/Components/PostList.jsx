import React, { useContext } from 'react'
import { FcLike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { postListContext } from '../Store/PostListStore';
import { FaRegEdit } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const PostList = ({ userName, id, title, reactions, tags = [], img, comments = [] }) => {
    const navigate = useNavigate();

    const handlePostClick = (id) => {
        navigate(`/post/${id}`);
    };

    return (
        <div className="card" style={{ width: "18rem" }} onClick={() => handlePostClick(id)}>
            <div className="card-body">
                <h3 className="card-title">{userName}</h3>
                {img && <img src={img} alt={title} className="card-img-top mb-2" style={{ maxHeight: "250px", objectFit: "cover" }} />}
                <h6 className="card-subtitle mb-2 text-muted" >{title}</h6>
                <span className='reactions'>
                    <FcLike />
                    <p style={{ paddingTop: '15px' }}>{reactions}</p>
                    <FaRegCommentDots />
                    <p style={{ paddingTop: '15px' }}>{comments.length || 0}</p>
                </span>
                <span>
                    {tags.map((tag, index) => (
                        <span key={index} className="badge bg-primary m-1">{tag}</span>
                    ))}
                </span>
            </div>
        </div>
    )
}

export default PostList
