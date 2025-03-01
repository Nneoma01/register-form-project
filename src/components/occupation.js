import "../components/occupation.css";

const OccupationSection = () => {

  return (
    <div className="occupation-section">
       <div className="occupation-text">
          <label for="occupation">Occupation <label className="tick">*</label></label>
          <input type="text" id="fname" name="email" placeholder="Your answer" required></input>
       </div>
    </div>
  );
}


export default OccupationSection;