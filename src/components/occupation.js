import "../components/occupation.css";

const OccupationSection = () => {

  return (
    <div className="occupation-section">
       <div className="occupation-text">
          <label htmlFor="occupation">Occupation <label className="tick">*</label></label>
          <input type="text" name="occupation" placeholder="Your answer" required/>
       </div>
    </div>
  );
}


export default OccupationSection;