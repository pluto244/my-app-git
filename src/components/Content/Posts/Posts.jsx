import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
    let PostFromUser = 
        props.posts.map( p => (<Post message={p.message} likesCount={p.likesCount} />
    ));

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText)
    };

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>{PostFromUser}</div>
        </div>
    );
};

export default Posts;
