import "../components/email.css";

const EmailSection = () => {

  return (
    <div className="email-section">
       <div className="email-text">
          <label for="email">Email</label>
          <input type="text" id="fname" name="email"></input>
       </div>
    </div>
  );
}


export default EmailSection;