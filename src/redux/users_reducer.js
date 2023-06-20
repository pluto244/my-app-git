const SHOW_MORE = "SHOW-MORE"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
let initialState = {
    users: [
        { usserId: 1, name: "Pasha", statusMessage: "I`here", followStatus: true, location: { state: "Monaho", country: "Russia", }, },
        { usserId: 2, name: "Dima", statusMessage: "I`here", followStatus: true, location: { state: "Monaho", country: "Russia", }, },
        { usserId: 3, name: "Anton", statusMessage: "I`here", followStatus: false, location: { state: "Monaho", country: "Russia", }, },
        { usserId: 4, name: "Egor", statusMessage: "I`here", followStatus: true, location: { state: "Monaho", country: "Russia", }, },
        { usserId: 5, name: "Kate", statusMessage: "I`here", followStatus: true, location: { state: "Monaho", country: "Russia", }, },
    ],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MORE:
            { return 1 }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.userId === action.userId) {
                        return { ...u, followStatus: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.userId === action.userId) {
                        return { ...u, followStatus: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }  
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: "FOLLOW", userId })
export const unfollowAC = (userId) => ({ type: "UNFOLLOW", userId })
export const setUsersAC = (users) => ({ type: "SET-USER", users })


export default usersReducer