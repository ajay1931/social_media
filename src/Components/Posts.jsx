import React, { useContext, useState } from 'react'
import { FcLike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { postListContext } from '../Store/PostListStore';

const Posts = ({ id, title, body, reactions, tags = [], userId }) => {
    const { deletePost } = useContext(postListContext);

    const [reaction, setReaction] = useState(reactions);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h3 className="card-title">{userId}</h3>
                <h6 className="card-subtitle mb-2 text-muted" >{title}</h6>
                <p className="card-text">{body}</p>
                <span className='reactions'>
                    <FcLike onClick={() => setReaction(reaction + 1)} />
                    <p style={{ paddingTop: '15px' }}>{reaction}</p>
                </span>
                <span>
                    {tags.map((tag, index) => (
                        <span key={index} className="badge bg-primary m-1">{tag}</span>
                    ))}
                </span>
            </div>
            <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => deletePost(id)}
            >
                <MdDelete />
            </span>
        </div>
    )
}

export default Posts
