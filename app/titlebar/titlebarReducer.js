const titlebarReducer = (state = "flow sample 2", action) =>{
    if(action.type === "SetTitle"){
           return action.title;
    }
    return state;
};

export default titlebarReducer;