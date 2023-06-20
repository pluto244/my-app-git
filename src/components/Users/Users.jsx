import React from "react"

const Users = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.userId} >
                <span>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <button onClick={props.follow}> follow/unfollow </button>
                    </div>
                </span>
                <span>
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