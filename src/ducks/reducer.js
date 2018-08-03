
// INITIALIZE VARIABLES 

const initialState = {
    article ="",
    target_url = "",
}
const NEW_POST = "NEW_POST"

function reducer(state=initialState, action){
    switch(action.type){
      case 'UPDATE_NUM':
        return Object.assign({},state,{counter:action.payload});
      default: return state;
    }
}

export function updateNum(num){
    return {
      type: 'UPDATE_NUM',
      payload: num
    }
}

export default reducer;