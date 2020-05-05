const skillPageReducer = (state=[], action)=>{
    if(action.type === `SET_SKILL`){
        return action.payload;
    }
    return state;
}

export default skillPageReducer;