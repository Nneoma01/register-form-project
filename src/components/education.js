import "../components/education.css";

const EducationSection = () => {


  return (
    <div className="education-section" required>
       <div className="education-text">
          <div className="education">Education <label className="tick">*</label></div>
          <div className="education-checks">
             <input type="radio"  name="education" ></input>High School Graduate
          </div>
          <div className="education-checks">
             <input type="radio"  name="education"></input>Diploma
          </div>
          <div className="education-checks">
             <input type="radio"  name="education"></input>Associate Degree
          </div>
          <div className="education-checks">
             <input type="radio"  name="education"></input>Degree
          </div>
          <div className="education-checks">
             <input type="radio"  name="education"></input>Masters
          </div>
          <div className="education-checks">
             <input type="radio"  name="education"></input>PhD
          </div>          
       </div>
    </div>
  );
}


export default EducationSection;
