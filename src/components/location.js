import "../components/location.css";

const LocationSection = () => {

  return (
    <div className="loaction-section">
       <div className="loaction-text">
          <label htmlFor="location">Location <label className="tick">*</label></label>
          <input type="text" name="location" placeholder="Your answer" required/>
       </div>
    </div>
  );
}


export default LocationSection;