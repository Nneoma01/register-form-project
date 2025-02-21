import "../components/email.css";

const EmailSection = () => {

  return (
    <div className="email-section">
       <div className="email-text">
          <label for="email">Email <label className="tick">*</label></label>
          <input type="text" id="fname" name="email" placeholder="Your answer"></input>
       </div>
    </div>
  );
}


export default EmailSection;