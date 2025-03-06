import "../components/location.css";

const LocationSection = ({ value, onChange }) => {

  return (
    <div className="loaction-section">
       <div className="loaction-text">
          <label htmlFor="location">Location <label className="tick">*</label></label>
          <input type="text" name="location" placeholder="Your answer" value={value} onChange={onChange} required/>
       </div>
    </div>
  );
}


export default LocationSection;