import React, { useContext, useRef } from 'react'
import { postListContext } from '../Store/ProductListStore';

const CreateContent = () => {
    const { addPost } = useContext(postListContext);

    let userId = useRef();
    let title = useRef();
    let body = useRef();
    let tags = useRef();

    let submit = (event) => {
        event.preventDefault();
        let newpost = {
            userId: userId.current.value,
            title: title.current.value,
            body: body.current.value,
            tags: tags.current.value.split(',').map(e => e.trim()),
            reactions: 0
        }
        addPost(newpost)
        userId.current.value = ''
        title.current.value = ''
        body.current.value = ''
        tags.current.value = ''

    };


    return (
        <div className="createcontent">
            <form className='createcontent-form' onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">User</label>
                    <select className="form-select" aria-label="Default select example" ref={userId}>
                        <option >You</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Post Tittle</label>
                    <input
                        ref={title}
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder='Enter your post tittle here'
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Post content</label>
                    <textarea
                        ref={body}
                        type="textarea"
                        className="form-control"
                        id="content"
                        rows='4'
                        placeholder='Enter your post content here'
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Hash Tags</label>
                    <input
                        ref={tags}
                        type="text"
                        className="form-control"
                        id="hashtag"
                        placeholder='Enter yout hashtag here'
                        required />
                </div>

                <button type="submit" className="btn btn-primary" >Post</button>
            </form>
        </div>
    )
}

export default CreateContent
