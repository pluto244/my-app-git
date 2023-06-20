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
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {

            return {
                ...state,
                newMessageBody: action.body,
            }
        }
        case SEND_NEW_MESSAGE: {
            let body = state.newMessageBody

            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, { id: 6, message: body, }]

            }


        }
        default: return state
    }
}


export let addMessageCreator = () => ({ type: SEND_NEW_MESSAGE, })

export let updateNewMessageCreator = (newText) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: newText,
})


export default messagesReducer