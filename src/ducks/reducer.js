
// INITIALIZE VARIABLES 

const initialState = {
    article:"",
    target_url:"",
    userid:"github|2996722"
}
const UPDATE_ARTICLE = "UPDATE_ARTICLE"
const UPDATE_URL = "UPDATE_URL"
const CREATE_POST = "CREATE_POST"

export default function reducer(state=initialState, action){
    switch(action.type){
      case UPDATE_ARTICLE:
        return Object.assign({},state,{reducer:action.payload});
      case CREATE_POST:
        return Object.assign({},state,{reducer:action.payload});
      default: return state;
    }
}

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
