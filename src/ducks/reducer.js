
// INITIALIZE VARIABLES 

const initialState = {
    article:"",
    fblink:"",
    article_info:{
      text1: 'ugh',
      text2: 'kh',
      text3: 'j'
    }
}
const UPDATE_ARTICLE = "UPDATE_ARTICLE"
const UPDATE_URL = "UPDATE_URL"
const ARTICLE_INFO= "ARTICLE_INFO"
const MAKE_TWEETS= "MAKE_TWEETS"
// const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
  

export default function reducer(state=initialState, action){
    switch(action.type){
      // case UPDATE_USER_DATA:
      //   return Object.assign({}, state, { user: action.payload }); // for Auth0?
      case UPDATE_ARTICLE:
        return Object.assign({},state,{article:action.payload});
      case UPDATE_URL:
        return Object.assign({},state,{fblink:action.payload});
      case ARTICLE_INFO:
        console.log("Reducer payload: ",action.payload) // makes it this far!
        return Object.assign({},state,{article_info:action.payload}); // doesn't cause the DOM to update!
      case MAKE_TWEETS:
        console.log("Reducer MakeTweets: ",action.payload) 
        return Object.assign({},state,{id:action.payload}); 

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
export function article_info(updates){
  return {
    type: ARTICLE_INFO,
    payload: updates
  }
}
export function make_tweets(id){
  console.log("Action Creator : ",id)
  return {
    type: MAKE_TWEETS,
    payload: id
  }
}

