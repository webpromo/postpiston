// MERGED WITH REDUCER.JS

const initialState = {
    user: {
      authid:"github|2996722",
      id:1,
      password:null,
      username:"Jesse Fisher"
    }
  };
  
  const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
  
  export function updateUserData(user) {
    return {
      type: UPDATE_USER_DATA,
      payload: user
    };
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_USER_DATA:
        return Object.assign({}, state, { user: action.payload });
      default:
        return state;
    }
  }
  