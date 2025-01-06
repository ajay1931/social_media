import React, { useContext } from 'react'
import { FcLike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { postListContext } from '../Store/PostListStore';

const Posts = ({ userName, id, title, body, reactions, tags = [], userId ,showDelete }) => {
    const { deletePost, updateReaction } = useContext(postListContext);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h3 className="card-title">{userName}</h3>
                <h6 className="card-subtitle mb-2 text-muted" >{title}</h6>
                <p className="card-text">{body}</p>
                <span className='reactions'>
                    <FcLike onClick={() => updateReaction(id)} />
                    <p style={{ paddingTop: '15px' }}>{reactions}</p>
                </span>
                <span>
                    {tags.map((tag, index) => (
                        <span key={index} className="badge bg-primary m-1">{tag}</span>
                    ))}
                </span>
            </div>
            {showDelete && (
                <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    onClick={() => deletePost(id)}
                >
                    <MdDelete />
                </span>
            )}
        </div>
    )
}

export default Posts
