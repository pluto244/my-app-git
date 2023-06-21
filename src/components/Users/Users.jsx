import React from "react"
import style from "./users.module.css"

const Users = (props) => {
    return <div>
        {
        props.users.map(u => <div className = {style.userBlock} key={u.userId} >
        <span className={style.buttonImageBlock}>
            <div className={style.userImage}>
                <img src={u.photoUrl} alt="" />
            </div>
            <div>
                
                {u.followStatus}
                
            </div>
        </span>
        <span className={style.NameStatuseBlock}>
            <span>
                <div>{u.name}</div>
                <div>{u.statusMessage}</div>
            </span>
            <span>
                <div>{u.location.state}</div>
                <div>{u.location.country}</div>
            </span>
        </span>

    </div>
    )
        }
</div>

} 

export default Users