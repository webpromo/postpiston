

const initialState = {
    user: {}
}

const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

export function updateUserData(user) {
    return {
        type: UPDATE_USER_DATA,
        payload: user
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_DATA:
            return Object.assign({}, state, {user:action.payload })  // have to do this because Redux has to compare two objects, which normally would create a falsy, becuase they're in two different places in memory.  
        default:
           return state;

    }
}