import React from "react"
import {connect} from "react-redux"
import Users from "./Users"
import { followAC,unfollowAC,setUsersAC } from "../../redux/users_reducer"


let mapStateToProps = (state) =>  {
    return {
        users: state.usersReducer.users
    }
}

let mapDispatchToProps = (dispatch) =>  {
    return {
        follow: (userId) =>{
            dispatch(followAC(userId));
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId));
        },
        setUsers: (userId) =>{
            dispatch(setUsersAC(userId));
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Users)