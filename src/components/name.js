import "../components/name.css";

const NameSection = ({ value, onChange }) => {

  return (
    <div className="name-section">
       <div className="name">
          <div htmlFor="fullname">Full Name <label className="tick">*</label></div>
          <input type="text" name="fullname" placeholder="Your answer" value={value} onChange={onChange} required></input>
       </div>
    </div>
  );
}


export default NameSection;
