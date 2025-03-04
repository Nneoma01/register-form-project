import "../components/gender.css";

const GenderSection = () => {

  return (
    <div className="gender-section">
       <div className="gender-text">
          <div className="gender" for="email">Gender <label className="tick">*</label></div>
          <div className="gender-checks">
             <input type="radio" name="gender"></input>
             <label htmlFor="gender">Male</label>
          </div>
          <div className="gender-checks">
             <input type="radio" name="gender"></input>
             <label htmlFor="gender">Female</label>
          </div>
          <div className="gender-checks">
             <input type="radio" name="gender"></input>
             <label htmlFor="gender">Prefer not to say</label>
          </div>
          <div className="gender-checks">
             <input type="radio" name="gender"></input>
             <label htmlFor="gender">Other:</label><input type="texts" id="name" name="email"></input>
          </div>
          
       </div>
    </div>
  );
}


export default GenderSection;
