import React from 'react'

const CreateContent = () => {
    return (
        <form className='createcontent-form'>
            <div className="mb-3">
                <label className="form-label">Post Tittle</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder='Enter your post tittle here'
                    required />
            </div>
            <div className="mb-3">
                <label className="form-label">Post content</label>
                <input
                    type="textarea"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder='Enter your post content here'
                    required />
            </div>
            <div className="mb-3">
                <label className="form-label">Hash Tags</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder='Enter yout hashtag here'
                    required />
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )
}

export default CreateContent
