import "../components/location.css";

const LocationSection = () => {

  return (
    <div className="loaction-section">
       <div className="loaction-text">
          <label for="location">Location <label className="tick">*</label></label>
          <input type="text" id="fname" name="location" placeholder="Your answer" required></input>
       </div>
    </div>
  );
}


export default LocationSection;