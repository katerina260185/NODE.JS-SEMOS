import { FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from "../constants/UserConstans";

const initialState = {users:[], errorMessage: undefined}

const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_SUCCESS:
            return {...state, users: action.payload}
        
        case FETCH_USERS_FAIL: 
            return {...state, errorMessage:action.payload}
        
        default:
            return state
       
    }
}

export default UsersReducer;