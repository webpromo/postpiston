import axios from 'axios';

// INITIALIZE VARIABLES 

const initialState = {
    article: "",
    fblink: "",
      text1: '(Post your content above)',
      text2: '(Post your content above)',
      text3: '(Post your content above)',
      authid: '',
      pic1: 'https://www.bootcamps.in/wp-content/uploads/2015/05/bootcampsin.png',
      pic2: 'https://www.bootcamps.in/wp-content/uploads/2015/05/bootcampsin.png',
      pic3: 'https://www.bootcamps.in/wp-content/uploads/2015/05/bootcampsin.png',
      loadPick: '',
      sorted1: [],
      sorted2: [],
      sorted3: [],
      picArr1: [],
      picArr2: [],
      picArr3: [],
      similar1: 0,
      similar2: 0,
      similar3: 0,
      diff1: 0,
      diff2: 0,
      diff3: 0,
      loadArchive: "",
      keyword1: "Default",
      keyword2: "Default",
      keyword3: "Default",
      
}
const UPDATE_ARTICLE = "UPDATE_ARTICLE"
const UPDATE_URL = "UPDATE_URL"
const ARTICLE_INFO= "ARTICLE_INFO"
const SAVE_TEXT1= "SAVE_TEXT1"
const SAVE_TEXT2= "SAVE_TEXT2"
const SAVE_TEXT3= "SAVE_TEXT3"
const SAVE_TEXTS= "SAVE_TEXTS"
const SAVE_PIC1= "SAVE_PIC1"
const SAVE_PIC2= "SAVE_PIC2"
const SAVE_PIC3= "SAVE_PIC3"
const SAVE_PICS1= "SAVE_PICS1"
const SAVE_PICS2= "SAVE_PICS2"
const SAVE_PICS3= "SAVE_PICS3"
const LOAD_PICK= "LOAD_PICK"
const LOAD_SET= "LOAD_SET"
const SORTED_1= "SORTED_1"
const SORTED_2= "SORTED_2"
const SORTED_3= "SORTED_3"
const SIMILAR_1= "SIMILAR_1"
const SIMILAR_2= "SIMILAR_2"
const SIMILAR_3= "SIMILAR_3"
const DIFF_1= "DIFF_1"
const DIFF_2= "DIFF_2"
const DIFF_3= "DIFF_3"
const GET_PICS_FULFILLED = "GET_PICS_FULFILLED"
const GET_PICS2_FULFILLED = "GET_PICS2_FULFILLED"
const GET_PICS3_FULFILLED = "GET_PICS3_FULFILLED"
const GET_PICS = "GET_PICS"
const GET_PICS2 = "GET_PICS2"
const GET_PICS3 = "GET_PICS3"
const KEYWORD1 = "KEYWORD1"
const KEYWORD2 = "KEYWORD2"
const KEYWORD3 = "KEYWORD3"



export default function reducer(state=initialState, action){
  switch(action.type){
    // case UPDATE_USER_DATA:  // Auth0
    //   return Object.assign({}, state, { user: action.payload }); // for Auth0?
        
      case UPDATE_ARTICLE:
        return Object.assign({},state,{article:action.payload});

      case UPDATE_URL:
        return Object.assign({},state,{fblink:action.payload});

      case ARTICLE_INFO:
      // console.log("Article info triggered: ",action)
        return Object.assign({},state,{
          article:action.payload.article,
          fblink:action.payload.fblink,
          id:action.payload.id,
          text1:action.payload.text1,
          text2:action.payload.text2,
          text3:action.payload.text3,
          user_id:action.payload.user_id
      });
        
      case SAVE_TEXT1:
        return Object.assign({},state,{text1:action.payload}); 

      case SAVE_TEXT2:
        return Object.assign({},state,{text2:action.payload}); 

      case SAVE_TEXT3:
        return Object.assign({},state,{text3:action.payload}); 

      case SAVE_PICS1:
        return Object.assign({},state,{picArr1:action.payload}); 

      case SAVE_PICS2:
        return Object.assign({},state,{picArr2:action.payload}); 

      case SAVE_PICS3:
        return Object.assign({},state,{picArr3:action.payload}); 

      case SORTED_1:
        return Object.assign({},state,{sorted1:action.payload}); 

      case SORTED_2:
        return Object.assign({},state,{sorted2:action.payload}); 

      case SORTED_3:
        return Object.assign({},state,{sorted3:action.payload}); 

      case SIMILAR_1:
        return Object.assign({},state,{similar1:action.payload}); 

      case SIMILAR_2:
        return Object.assign({},state,{similar2:action.payload}); 

      case SIMILAR_3:
        return Object.assign({},state,{similar3:action.payload}); 

      case DIFF_1:
        return Object.assign({},state,{diff1:action.payload}); 

      case DIFF_2:
        return Object.assign({},state,{diff2:action.payload}); 

      case DIFF_3:
        return Object.assign({},state,{diff3:action.payload}); 

      case SAVE_TEXTS:
        return Object.assign({},state,{
          text1:action.payload.t1,
          text2:action.payload.t2,
          text3:action.payload.t3
        }); 

      case LOAD_PICK:
        return Object.assign({},state,{loadPick:action.payload}); 

      case SAVE_PIC1:
       return Object.assign({}, state, {pic1: action.payload})
  
      case SAVE_PIC2:
       return Object.assign({}, state, {pic2: action.payload})
  
      case SAVE_PIC3:
       return Object.assign({}, state, {pic3: action.payload})

      case LOAD_SET:
        return Object.assign({},state,{
          article:action.payload.article,
          fblink:action.payload.fblink,
          id:action.payload.id,
          text1:action.payload.text1,
          text2:action.payload.text2,
          text3:action.payload.text3,
          pic1:action.payload.pic1,
          pic2:action.payload.pic2,
          pic3:action.payload.pic3,
          loadArchive:"yes"
      });

      case GET_PICS_FULFILLED:
        return Object.assign({}, state, {picArr1: action.payload.data})
    
      case GET_PICS2_FULFILLED:
        return Object.assign({}, state, {picArr2: action.payload.data})
    
      case GET_PICS3_FULFILLED:
        return Object.assign({}, state, {picArr3: action.payload.data})
    
      case KEYWORD1:
        return Object.assign({}, state, {keyword1: action.payload})
    
      case KEYWORD2:
        return Object.assign({}, state, {keyword2: action.payload})
    
      case KEYWORD3:
        return Object.assign({}, state, {keyword3: action.payload})

      default: return state;
    }

}

export function get_pics(keyword){
  keyword1(keyword);
  let promise = axios.get('/api/pics/'+keyword)
  promise.then(res => {  
      let returnMe = res.data.data;
      return returnMe;
  })
  return {
    type: GET_PICS,
    payload: promise
  }
}

export function get_pics2(keyword){
  let promise = axios.get('/api/pics/'+keyword)
  promise.then(res => {  
      let returnMe = res.data.data;
      return returnMe;
  })
  return {
    type: GET_PICS2,
    payload: promise
  }
}

export function get_pics3(keyword){
  let promise = axios.get('/api/pics/'+keyword)
  promise.then(res => {  
      let returnMe = res.data.data;
      return returnMe;
  })
  return {
    type: GET_PICS3,
    payload: promise
  }
}

export function load_set(post){
  return {
    type: LOAD_SET,
    payload: post
  }
}

export function save_pic1(picURL){
    return {
      type: SAVE_PIC1,
      payload: picURL
    }
}

export function save_pic2(picURL){
    return {
      type: SAVE_PIC2,
      payload: picURL
    }
}

export function save_pic3(picURL){
    return {
      type: SAVE_PIC3,
      payload: picURL
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

export function save_pics1(pics1){
  // console.log("save_pics1 Action Creator receives : ",pics1)
  return {
    type: SAVE_PICS1,
    payload: pics1
  }
}

export function save_pics2(pics2){
  // console.log("save_text2 Action Creator receives : ",pics2)
  return {
    type: SAVE_PICS2,
    payload: pics2
  }
}

export function save_pics3(pics3){
  // console.log("save_text3 Action Creator receives : ",pics3)
  return {
    type: SAVE_PICS3,
    payload: pics3
  }
}

export function sorted_1(sorted1){
  // console.log("sorted_1 Action Creator receives : ",sorted1)
  return {
    type: SORTED_1,
    payload: sorted1
  }
}

export function sorted_2(sorted2){
  return {
    type: SORTED_2,
    payload: sorted2
  }
}

export function sorted_3(sorted3){
  return {
    type: SORTED_3,
    payload: sorted3
  }
}

export function similar_1(similar1){
  // console.log("similar_1 Action Creator receives : ",similar1)
  return {
    type: SIMILAR_1,
    payload: similar1
  }
}

export function similar_2(similar2){
  // console.log("similar_2 Action Creator receives : ",similar2)
  return {
    type: SIMILAR_2,
    payload: similar2
  }
}

export function similar_3(similar3){
  console.log("similar_3 Action Creator receives : ",similar3)
  return {
    type: SIMILAR_3,
    payload: similar3
  }
}

export function diff_1(diff1){
  // console.log("diff_1 Action Creator receives : ",diff1)
  return {
    type: DIFF_1,
    payload: diff1
  }
}

export function diff_2(diff2){
  // console.log("diff_2 Action Creator receives : ",diff2)
  return {
    type: DIFF_2,
    payload: diff2
  }
}

export function diff_3(diff3){
  // console.log("diff_3 Action Creator receives : ",diff3)
  return {
    type: DIFF_3,
    payload: diff3
  }
}

export function save_texts(texts){
  // console.log("save_text1 Action Creator receives : ",text1)
  return {
    type: SAVE_TEXTS,
    payload: texts
  }
}

export function loadPick(e){
  // console.log("loadPick AC received : ",e)
  return {
    type: LOAD_PICK,
    payload: e
  }
}

export function update(e){
  // console.log("loadPick AC received : ",e)
  return {
    type: LOAD_PICK,
    payload: e
  }
}

export function keyword1(e){
  return {
    type: KEYWORD1,
    payload: e
  }
}

export function keyword2(e){
  return {
    type: KEYWORD2,
    payload: e
  }
}

export function keyword3(e){
  return {
    type: KEYWORD3,
    payload: e
  }
}

