import React from 'react';
import { onPostChangeActionCreator, addPostActionCreator } from '../../../redux/profile_reducer';
import Posts from "./Posts";
import {connect} from 'react-redux'

const PostsContainer = (props) => {
// debugger

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (newText) => {
        let action = onPostChangeActionCreator(newText)
        props.store.dispatch(action);
    };

    return (
        <Posts updateNewPostText={onPostChange} 
        addPost = {addPost} 
        posts = {props.store.getState().profileReducer.postData} 
        newPostText = {props.store.getState().profileReducer.newPostText}/>

    )
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         updateNewPostText: (newText) =>{
//             dispatch(onPostChangeActionCreator(newText))
//         }

//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         posts: state.profileReducer.postData,
//         newPostText: state.profileReducer.newPostText
//     }
// }

// const PostsContainer = connect(mapDispatchToProps,mapStateToProps)(Posts)


export default PostsContainer;
