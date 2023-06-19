import { combineReducers, createStore } from 'redux'
import messagesReducer from './messages_reducer'
import profileReducer from './profile_reducer'

let reducers = combineReducers({
  profileReducer: profileReducer,
  messagesReducer: messagesReducer,
})

let store = createStore(reducers)

export default store
