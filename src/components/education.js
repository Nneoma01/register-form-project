import "../components/education.css";

const EducationSection = () => {

  return (
    <div className="education-section">
       <div className="education-text">
          <div className="education" for="email">Education <label className="tick">*</label></div>
          <div className="education-checks">
             <input type="radio" id="fname" name="name" ></input>
             <label for="education">High School Graduate</label>
          </div>
          <div className="education-checks">
             <input type="radio" id="fname" name="name"></input>
             <label for="education">Diploma</label>
          </div>
          <div className="education-checks">
             <input type="radio" id="fname" name="name"></input>
             <label for="education">Associate Degree</label>
          </div>
          <div className="education-checks">
             <input type="radio" id="fname" name="name"></input>
             <label for="eduaction">Degree</label>
          </div>
          <div className="education-checks">
             <input type="radio" id="fname" name="name"></input>
             <label for="eduaction">Masters</label>
          </div>
          <div className="education-checks">
             <input type="radio" id="fname" name="name"></input>
             <label for="education">PhD</label>
          </div>
          
       </div>
    </div>
  );
}


export default EducationSection;
