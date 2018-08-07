
// INITIALIZE VARIABLES 

const initialState = {
    article: "",
    fblink: "",
      text1: '(Post your content above)',
      text2: '(Post your content above)',
      text3: '(Post your content above)',
      authid: '',
      pic1: '',
      pic2: '',
      pic3: ''
}
const UPDATE_ARTICLE = "UPDATE_ARTICLE"
const UPDATE_URL = "UPDATE_URL"
const ARTICLE_INFO= "ARTICLE_INFO"
const SAVE_TEXT1= "SAVE_TEXT1"
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
      console.log("Article info: ",action)
        return Object.assign({},state,{
          article:action.payload.article,
        text1:action.payload.text1,
        text2:action.payload.text2,
        text3:action.payload.text3,
        user_id:action.payload.user_id,
        fblink:action.payload.fblink
      });
        
      case SAVE_TEXT1:
      console.log("Save text",action)
        return Object.assign({},state,{text1:action.payload}); 
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
  console.log("AC article_info is receiving: ",updates);
  return {
    type: ARTICLE_INFO,
    payload: updates
  }
}

export function save_text1(text1){
  console.log("save_text1 Action Creator receives : ",text1)
  return {
    type: SAVE_TEXT1,
    payload: text1
  }
}

