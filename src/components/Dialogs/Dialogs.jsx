import React from "react";
import dialog from "./Dialogs.module.css";
import MessageFromUser from "./MessageFromUser/MessageFromUser";
import UserDialog from "./MessageFromUser/UserDialog"


const Dialogs = (props) => {



  let dialogsElements = props.dialogsPage.dialogsData.map(d => <UserDialog name={d.name} id={d.id} />);
  let messagesElements = props.dialogsPage.messageData.map(m => <MessageFromUser message={m.message} />);
  let newMessageBody = React.createRef();


  let onMessageChange = () => {
    let body = newMessageBody.current.value;
    props.onMessageEntry(body)
  }


  return (
    <div className={dialog.dialogs}>
      <div className={dialog.dialogs_id}>{dialogsElements}</div>
      <div className={dialog.messages}>{messagesElements}</div>
      <div>
        <textarea onChange={onMessageChange}
          ref={newMessageBody}
          value={props.newMessageBody}></textarea>
      </div>
      <div>
        <button onClick={props.addMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
