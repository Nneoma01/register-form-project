import "../components/name.css";

const NameSection = () => {

  return (
    <div className="name-section">
       <div>
          <label for="name">First Name</label>
          <input type="text" id="fname" name="name"></input>
       </div>
    </div>
  );
}


export default NameSection;
