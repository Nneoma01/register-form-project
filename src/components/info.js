import "../components/info.css";
import { AiFillLike } from "react-icons/ai";
import { FcAlarmClock } from "react-icons/fc";
import { LuMailX } from "react-icons/lu";
import { BsCloudCheck } from "react-icons/bs";

const InfoSection = () => {

  const mystyle = {
    color: "red",
    fontStyle: "italic"
  };

  return (
    <div className="info-section">
      <div className="empty"></div>
      <div className="info-text">
        <div className="info-title">DESIGN YOUR LIFE 1.0</div>
        <div className="info">
          STOP Living on Autopilot ,START Designing Your Dream Life. Join this exclusive 2-hour matsrerclass 
          and discover the proven framework that is helping professionals transform chaos into clarity. Plus,  Get instant access to 
          our Life Audit Toolkit ($75 value) completely free.<br/><br/>
        </div>  
        <div>We promise, this is a very short form. <AiFillLike /></div><br/><br/>
        <div style={mystyle}> Spots are limited. Reserve yours now.<FcAlarmClock /></div><br/>
        <div className="underline" style={{ borderTop: "2px solid #c6c3b5 "}}></div>  
        <div className="info-footer">
          <div className="email">favourokagbue20@gmail.com</div>
          <div className="text">Switch Account</div><br/>
          <div className="icons"><LuMailX /><br/><BsCloudCheck /></div>
        </div>
        <div className="underline" style={{ borderTop: "2px solid #c6c3b5 "}}></div><br/> 
        <div style={mystyle}>* Indicates required question</div>
      </div><br/> 
    </div>
  );
}


export default InfoSection;
