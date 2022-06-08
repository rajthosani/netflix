import Navbar from "../../components/Navbar";
import Featured from "../../components/Featured";
import "./homs.css";
import List from "../../components/List";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLists } from "../../context/UserActions";
import Listitem from "../../components/Listitem";


const Home = ( type ) => {
  
  const [genre, setGenre] = useState(null);
  const [list,setlist]=useState({});
  const [currtype,setcurrtype]=useState("");
  console.log('type is',type?.type);
  
  const dispatch=useDispatch();
  useEffect(() => {
    setcurrtype(type?.type);
    const getRandomLists = async () => {
      try {
        if(currtype=="series"){
          setlist({});
          //const res=await axios.get("/api/lists?type=series");
          const res=await axios.get("/api/lists?type=movie");
          setlist(res?.data);
        }else{
          setlist({});
          const res=await axios.get("/api/lists?type=series");
          //const res=await axios.get("/api/lists?type=movie");
          setlist(res?.data);
        }
        
        //setlist(res.data);
        
        //http://localhost:8800/api/lists?type=series
        //dispatch(setLists(res.data));
      
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type,genre]);
 

  return (
    <div className="home">
      <Navbar />
      {type?<Featured type={type} setGenre={setGenre} />:<></>}
      {list.length>0?list.map((currlist)=>(<List finallist={currlist}/>)):<p>Loading</p>}
    
 
    </div>
  );
};

export default Home;