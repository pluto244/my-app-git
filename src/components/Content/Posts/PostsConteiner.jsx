import React from 'react';
import { onPostChangeActionCreator, addPostActionCreator } from '../../../redux/profile_reducer';
import Posts from "./Posts";
import {connect} from 'react-redux'

// const PostsContainer = (props) => {
// debugger

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };

//     let onPostChange = (newText) => {
//         let action = onPostChangeActionCreator(newText)
//         props.store.dispatch(action);
//     };

//     return (
//         <Posts updateNewPostText={onPostChange} 
//         addPost = {addPost} 
//         posts = {props.store.getState().profileReducer.postData} 
//         newPostText = {props.store.getState().profileReducer.newPostText}/>

//     )
// };

let mapDispatchToProps = (dispatch) => {
    
    return {
        
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText) =>{
            dispatch(onPostChangeActionCreator(newText))
        }

    }
}

let mapStateToProps = (store) => {
    return {
        posts: store.profileReducer.postData,
        newPostText: store.profileReducer.newPostText
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)


export default PostsContainer;
