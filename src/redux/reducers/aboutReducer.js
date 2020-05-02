const aboutPageReducer = (state=[], action)=>{
    if(action.type === `SET_ABOUT`){
        return action.payload;
    }
    return state;
}

export default aboutPageReducer;