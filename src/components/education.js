import "../components/education.css";

const EducationSection = () => {


  return (
    <div className="education-section" required>
       <div className="education-text">
          <div className="education">Education <label className="tick">*</label></div>
          <div className="education-checks">
             <input type="radio"  name="education" ></input>High School Graduate
             {/* <label htmlFor="education">High School Graduate</label> */}
          </div>
          <div className="education-checks">
             <input type="radio"  name="education"></input>
             <label htmlFor="education">Diploma</label>
          </div>
          <div className="education-checks">
             <input type="radio"  name="education"></input>
             <label htmlFor="education">Associate Degree</label>
          </div>
          <div className="education-checks">
             <input type="radio"  name="education"></input>
             <label htmlFor="eduaction">Degree</label>
          </div>
          <div className="education-checks">
             <input type="radio"  name="education"></input>
             <label htmlFor="eduaction">Masters</label>
          </div>
          <div className="education-checks">
             <input type="radio"  name="education"></input>
             <label htmlFor="education">PhD</label>
          </div>
          
       </div>
    </div>
  );
}


export default EducationSection;
