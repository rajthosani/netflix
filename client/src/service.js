import axios from "axios";

export const loginuser=async(email,pass)=>{
    const res= await axios.post("/api/auth/login",{"email":email,"password":pass});
    return res;
}
