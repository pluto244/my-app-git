const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE"

let initialState = {
    messageData: [
        { id: 1, message: "Pasha w1 " },
        { id: 2, message: "Dima a2" },
        { id: 3, message: "Anton s3" },
        { id: 4, message: "Egor d4 " },
        { id: 5, message: "Kate  5 " },
    ],
    dialogsData: [
        { id: 1, name: "Pasha" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Anton" },
        { id: 4, name: "Egor" },
        { id: 5, name: "Kate" },
    ],
    newMessageBody: "rt",
}

const messagesReducer = (state = initialState, action) => {


    if (action.type === UPDATE_NEW_MESSAGE_BODY) {

        state.newMessageBody = action.body

    } else if (action.type === SEND_NEW_MESSAGE) {

        let body = state.newMessageBody
        state.messageData.push({ id: 6, message: body, })
        state.newMessageBody = ''
    }


    return state
}


export let addMessageCreator = () => ({type: SEND_NEW_MESSAGE,})

export let updateNewMessageCreator = (newText) => ({    
        type: UPDATE_NEW_MESSAGE_BODY,
        body: newText,
})


export default messagesReducer