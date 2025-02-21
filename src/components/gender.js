import "../components/gender.css";

const GenderSection = () => {

  return (
    <div className="gender-section">
       <div className="gender-text">
          <div className="gender" for="email">Gender <label className="tick">*</label></div>
          <div className="gender-checks">
             <input type="radio" id="fname" name="name" placeholder="Your answer"></input>
             <label for="gender">Male</label>
          </div>
          <div className="gender-checks">
             <input type="radio" id="fname" name="name" placeholder="Your answer"></input>
             <label for="gender">Female</label>
          </div>
          <div className="gender-checks">
             <input type="radio" id="fname" name="name" placeholder="Your answer"></input>
             <label for="gender">Prefer not to say</label>
          </div>
          <div className="gender-checks">
             <input type="radio" id="fname" name="name" placeholder="Your answer"></input>
             <label for="gender">Other:</label><input type="text" id="name" name="email"></input>
          </div>
          
       </div>
    </div>
  );
}


export default GenderSection;
