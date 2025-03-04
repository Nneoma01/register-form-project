import "../components/name.css";

const NameSection = () => {

  return (
    <div className="name-section">
       <div className="name">
          <div htmlFor="name">Full Name <label className="tick">*</label></div>
          <input type="text" name="fullname" placeholder="Your answer"  required></input>
       </div>
    </div>
  );
}


export default NameSection;
