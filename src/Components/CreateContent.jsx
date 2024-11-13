import React from 'react'

const CreateContent = () => {
    return (
        <form className='createcontent-form'>
            <div class="mb-3">
                <label class="form-label">Post Tittle</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder='Enter your post tittle here' />
            </div>
            <div class="mb-3">
                <label class="form-label">Post content</label>
                <input
                    type="textarea"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder='Enter your post content here' />
            </div>
            <div class="mb-3">
                <label class="form-label">Hash Tags</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder='Enter yout hashtag here' />
            </div>

            <button type="submit" class="btn btn-primary">Post</button>
        </form>
    )
}

export default CreateContent
