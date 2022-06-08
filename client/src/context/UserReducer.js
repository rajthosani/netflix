export const UserReducer=(state={ user:{} }, action)=>{
    switch(action.type){
        case 'ADD_USER_SUCCESS':
            return {user:action.payload}

        case 'ADD_USER_FAIL':
            return {user:action.payload}

        case 'LOGOUT':
            return {user:null}
        
        default:
            return state    

    }
};