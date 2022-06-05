import { ArrowBackOutlined } from "@mui/icons-material";
import { Link} from "react-router-dom";
import "./watch.css";

export default function Watch() {
  
  
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      
    </div>
  );
}