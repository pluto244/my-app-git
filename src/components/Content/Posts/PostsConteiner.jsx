import React from 'react'
import { onPostChangeActionCreator, addPostActionCreator } from '../../../redux/profile_reducer'
import Posts from "./Posts"
import {connect} from 'react-redux'

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


export default PostsContainer
