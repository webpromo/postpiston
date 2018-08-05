
// INITIALIZE VARIABLES 

const initialState = {
    article:"",
    target_url:""
}
const UPDATE_ARTICLE = "UPDATE_ARTICLE"
const UPDATE_URL = "UPDATE_URL"
// const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
  

export default function reducer(state=initialState, action){
    switch(action.type){
      // case UPDATE_USER_DATA:
      //   return Object.assign({}, state, { user: action.payload });
      case UPDATE_ARTICLE:
        return Object.assign({},state,{article:action.payload});
      default: return state;
    }
}

// export function updateUserData(user) {
//   return {
//     type: UPDATE_USER_DATA,
//     payload: user
//   };
// }

export function update_Article(article){
    return {
      type: UPDATE_ARTICLE,
      payload: article
    }
}

export function update_URL(URL){
  return {
    type: UPDATE_URL,
    payload: URL
  }
}
