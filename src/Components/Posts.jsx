import React, { useContext } from 'react'
import { FcLike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { postListContext } from '../Store/PostListStore';
import { FaRegEdit } from "react-icons/fa";

const Posts = ({ userName, id, title, body, reactions, tags = [], userId, showOptions }) => {
    const { deletePost, editPost, updateReaction } = useContext(postListContext);

    const handleEdit = (id) => {
        const updateTitle = prompt("Edit the post title:", title);
        const updateBody = prompt("Edit the post body:", body);
        const updateTag = prompt("Edit the post tag:", tags.join(","));

        if (updateTitle !== null && updateBody !== null && updateTag !== null) {
            editPost(id, { title: updateTitle, body: updateBody, tags: updateTag.split(',') });
        }
        console.log(title, id)
    };


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
            {showOptions && (
                <div className="position-absolute top-0 end-0 d-flex gap-2 m-2">
                    <span
                        className="p-2 rounded-circle bg-danger text-white"
                        onClick={() => deletePost(id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <MdDelete />
                    </span>
                    <span
                        className="p-2 rounded-circle bg-warning text-white"
                        onClick={() => handleEdit(id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <FaRegEdit />
                    </span>
                </div>
            )}
        </div>
    )
}

export default Posts
