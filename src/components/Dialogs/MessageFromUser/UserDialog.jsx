import React from "react";
import { NavLink } from "react-router-dom";
import dialog from "./../Dialogs.module.css";


const UserDialog = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
      <div>
        <NavLink to={path} className={dialog.dialogLink}>
          {props.name}
        </NavLink>
      </div>
    );
  };

export default UserDialog;