
// INITIALIZE VARIABLES 

const initialState = {
    article:"",
    fblink:"",
    articleID:null
}
const UPDATE_ARTICLE = "UPDATE_ARTICLE"
const UPDATE_URL = "UPDATE_URL"
const CURRENT_ARTICLE_ID= "CURRENT_ARTICLE_ID"
// const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
  

export default function reducer(state=initialState, action){
    switch(action.type){
      // case UPDATE_USER_DATA:
      //   return Object.assign({}, state, { user: action.payload });
      case UPDATE_ARTICLE:
        return Object.assign({},state,{article:action.payload});
      case UPDATE_URL:
        return Object.assign({},state,{fblink:action.payload});
      case CURRENT_ARTICLE_ID:
        console.log("All that stuff: ",Object.assign({},state,{articleID:action.payload}))
        return Object.assign({},state,{articleID:action.payload});
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
export function remember_article_id(id){
  console.log("ID: ",id)
  return {
    type: CURRENT_ARTICLE_ID,
    payload: id
  }
}
