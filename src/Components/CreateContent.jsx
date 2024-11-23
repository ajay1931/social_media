import React from 'react'

const CreateContent = () => {
    return (
        <div className="createcontent">
            <form className='createcontent-form'>
                <div className="mb-3">
                    <label className="form-label">User</label>
                    <input
                        type="text"
                        defaultValue="You"
                        className="form-control"
                        id="user"
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Post Tittle</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder='Enter your post tittle here'
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Post content</label>
                    <textarea
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
                        type="text"
                        className="form-control"
                        id="hashtag"
                        placeholder='Enter yout hashtag here'
                        required />
                </div>

                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </div>
    )
}

export default CreateContent
