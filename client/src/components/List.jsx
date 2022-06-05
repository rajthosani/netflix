
import { useEffect, useRef, useState } from "react";
import Listitem from "./Listitem";
import "./list.css";
import axios from 'axios';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";


export default function List({finallist}) {
  const [isMoved, setIsMoved] = useState(false);
  const [content,setcontent]=useState();
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  console.log('list is',finallist);


  useEffect(() => {
    finallist&&setcontent(finallist.content);
  }, []);


  /*<Listitem index="1" item="627648955436c12b1b123611" />
  <Listitem index="2" item="6276499c5436c12b1b123615" />
  <Listitem index="3" item="62763d145436c12b1b123605" />
  <Listitem index="4" item="62764b115436c12b1b123617" />
  <Listitem index="5" item="627648955436c12b1b123611" />"*/
  
  

  const listRef = useRef();
  console.log('content is',content);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list" >
      <span className="listTitle">{finallist?.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
            {content?.map((con,index)=>(<Listitem index={index} item={con}/>))}
            
          
         
          
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}  
