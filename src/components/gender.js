import "../components/gender.css";

const GenderSection = ({ value, onChange }) => {

  return (
    <div className="gender-section">
       <div className="gender-text">
          <div className="gender" for="email">Gender <label className="tick">*</label></div>
          <div className="gender-checks">
             <input type="radio" name="gender" value={value} onChange={onChange}></input>Male
          </div>
          <div className="gender-checks">
             <input type="radio" name="gender" value={value} onChange={onChange}></input>Female
          </div>
          <div className="gender-checks">
             <input type="radio" name="gender" value={value} onChange={onChange}></input>Prefer not to say
          </div>
          <div className="gender-checks">
             <input type="radio" name="gender" value={value} onChange={onChange}></input>Other: <input type="texts" id="name" name="email"></input>
          </div>
          
       </div>
    </div>
  );
}


export default GenderSection;
