import React from "react";



const MessageFromUser = (props) => {
    return (
        <div className="dialog.message">
            {props.message}
        </div>
    );
}



export default MessageFromUser;