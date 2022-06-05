import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.css";

export default function Featured({ type, setGenre }) {
    const [content, setContent] = useState({});
  
    useEffect(() => {
      const getRandomContent = async () => {
        try {
          const res = await axios.get(`/api/movies/random?type=${type}`);
         
          setContent(res.data[0]);
        } catch (err) {
          console.log(err);
        }
      };
      getRandomContent();
    }, [type]);
  
    
    return (
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movies" ? "Movies" : "Series"}</span>
            <select className="select"
              name="genre"
              id="genre"
              onChange={(e) => setGenre(e.target.value)}
            >
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img src={content?.img} className="image" alt="" />
        <div className="info">
          <img src={content?.imgTitle} className="img" alt="" />
          <div style={{fontSize:30,color:"white"}} className="desc">{content?.desc}</div>
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span className="span">Info</span>
            </button>
          </div>
        </div>
      </div>
    );
  }