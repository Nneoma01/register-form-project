import "../components/gender.css";

const GenderSection = () => {

  return (
    <div className="gender-section" re>
       <div className="gender-text">
          <div className="gender" for="email">Gender <label className="tick">*</label></div>
          <div className="gender-checks">
             <input type="radio" name="gender"></input>Male
          </div>
          <div className="gender-checks">
             <input type="radio" name="gender"></input>Female
          </div>
          <div className="gender-checks">
             <input type="radio" name="gender"></input>Prefer not to say
          </div>
          <div className="gender-checks">
             <input type="radio" name="gender"></input>Other: <input type="texts" id="name" name="email"></input>
          </div>
          
       </div>
    </div>
  );
}


export default GenderSection;
