import "../components/occupation.css";

const OccupationSection = ({ value, onChange }) => {

  return (
    <div className="occupation-section">
       <div className="occupation-text">
          <label htmlFor="occupation">Occupation <label className="tick">*</label></label>
          <input type="text" name="occupation" placeholder="Your answer" value={value} onChange={onChange} required/>
       </div>
    </div>
  );
}


export default OccupationSection;