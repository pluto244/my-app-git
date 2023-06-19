const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
        postData: [
            { id: 1, message: "Pasha", likesCount: 12 },
            { id: 2, message: "Dima", likesCount: 12 },
            { id: 3, message: "Anton", likesCount: 12 },
            { id: 4, message: "Egor", likesCount: 12 },
            { id: 5, message: "Kate", likesCount: 12 },
        ],
        newPostText: "yr",
}

export const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 7,
            message:state.newPostText,
            likesCount: 0,
        }

       state.postData.push(newPost)
       state.newPostText = ''

    } else if (action.type === UPDATE_NEW_POST_TEXT) {

       state.newPostText = action.newText

    }


    return state
}


export let addPostActionCreator = () => ({type: ADD_POST,})

export let onPostChangeActionCreator = (newText) => ({    
        type: UPDATE_NEW_POST_TEXT,
        newText: newText,
})


export default profileReducer