import React from "react";
import { updateNewMessageCreator, addMessageCreator } from '../../redux/messages_reducer'
import Dialogs from "./Dialogs"
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.messagesReducer,
    newMessageBody: state.messagesReducer.newMessageBody,
  }
}

let mapDispatchToProps = (dispatch) => {
  debugger
  return {
    
    addMessage: () => {
      dispatch(addMessageCreator())
    },
    onMessageEntry: (body) => {
      dispatch(updateNewMessageCreator(body))
    },
  }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
