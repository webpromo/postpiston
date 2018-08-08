
// INITIALIZE VARIABLES 

const initialState = {
    article: "",
    fblink: "",
      text1: '',
      text2: '',
      text3: '',
      authid: '',
      pic1: '',
      pic2: '',
      pic3: ''
}
const UPDATE_ARTICLE = "UPDATE_ARTICLE"
const UPDATE_URL = "UPDATE_URL"
const ARTICLE_INFO= "ARTICLE_INFO"
const SAVE_TEXT1= "SAVE_TEXT1"
const SAVE_TEXT2= "SAVE_TEXT2"
const SAVE_TEXT3= "SAVE_TEXT3"
const SAVE_TEXTS= "SAVE_TEXTS"
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
      // console.log("Article info: ",action)
        return Object.assign({},state,{
          article:action.payload.article,
          text1:action.payload.text1,
          text2:action.payload.text2,
          text3:action.payload.text3,
          user_id:action.payload.user_id,
          fblink:action.payload.fblink
      });
        
      case SAVE_TEXT1:
      console.log("Saves text1 to state ",action)
        return Object.assign({},state,{text1:action.payload}); 

      case SAVE_TEXT2:
      console.log("Saves text2 to state ",action)
        return Object.assign({},state,{text2:action.payload}); 

      case SAVE_TEXT3:
      console.log("Saves text3 to state ",action)
        return Object.assign({},state,{text3:action.payload}); 

      case SAVE_TEXTS:
      console.log("Save_texts AC's action: ",action)
        return Object.assign({},state,{
          text1:action.payload.t1,
          text2:action.payload.t2,
          text3:action.payload.t3
        }); 


      default: return state;
    }
}

export function update_Article(article){
    // console.log("AC update_Article is receiving: ",article)
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
  // console.log("AC article_info is receiving: ",updates);
  return {
    type: ARTICLE_INFO,
    payload: updates
  }
}

export function save_text1(text1){
  // console.log("save_text1 Action Creator receives : ",text1)
  return {
    type: SAVE_TEXT1,
    payload: text1
  }
}

export function save_text2(text2){
  // console.log("save_text2 Action Creator receives : ",text2)
  return {
    type: SAVE_TEXT2,
    payload: text2
  }
}

export function save_text3(text3){
  // console.log("save_text3 Action Creator receives : ",text3)
  return {
    type: SAVE_TEXT3,
    payload: text3
  }
}

export function save_texts(texts){
  // console.log("save_text1 Action Creator receives : ",text1)
  return {
    type: SAVE_TEXTS,
    payload: texts
  }
}

