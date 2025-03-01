import "../components/name.css";

const NameSection = () => {

  return (
    <div className="name-section">
       <div className="name">
          <div for="name">First Name <label className="tick">*</label></div>
          <input type="text" id="fname" name="name" placeholder="Your answer" required></input>
       </div>
    </div>
  );
}


export default NameSection;
