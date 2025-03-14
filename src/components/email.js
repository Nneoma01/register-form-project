import "../components/email.css";

const EmailSection = ({ value, onChange }) => {

  return (
    <div className="email-section">
       <div className="email-text">
          <label htmlFor="email">Email <label className="tick">*</label></label>
          <input type="text" name="email" placeholder="Your answer" value={value} onChange={onChange} required></input>
       </div>
    </div>
  );
}


export default EmailSection;