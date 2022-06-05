import axios from 'axios';
export const setUser=(data)=>async(dispatch)=>{
    try{
        
        
        dispatch({type:"ADD_USER_SUCCESS",payload:data});


    }catch(error){
        dispatch({type:"ADD_USER_FAIL",payload:error.response});
    }
};

export const setLists=(data)=>async(dispatch)=>{
    try{
        
        
        dispatch({type:"ADD_LIST_SUCCESS",payload:data});


    }catch(error){
        dispatch({type:"ADD_LIST_FAIL",payload:error.response});
    }
};

export const resetLists=()=>async(dispatch)=>{
    try{
        
        
        dispatch({type:"RESET_LIST_SUCCESS"});


    }catch(error){
        dispatch({type:"RESET_LIST_FAIL",payload:error.response});
    }
};



