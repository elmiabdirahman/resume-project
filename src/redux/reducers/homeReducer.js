const homePageReducer = (state=[], action)=>{
    if(action.type === `SET_HOME`){
        return action.payload;
    }
    return state;
}

export default homePageReducer;