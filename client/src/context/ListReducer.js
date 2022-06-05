export const ListReducer=(state={ list:{} }, action)=>{
    switch(action.type){
        case 'ADD_LIST_SUCCESS':
            return {list:action.payload}

        case 'ADD_LIST_FAIL':
            return {list:action.payload}

        case 'RESET_LIST_SUCCESS':
            return {list:{}}

        case 'RESET_LIST_FAIL':
            return{ list:action.payload}
        
        default:
            return state    

    }
};