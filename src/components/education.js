import "../components/education.css";

const EducationSection = ({ value, onChange }) => {


  return (
    <div className="education-section" required>
       <div className="education-text">
          <div className="education">Education <label className="tick">*</label></div>
          <div className="education-checks">
             <input type="radio"  name="education" value="High School Graduate" onChange={onChange}/>High School Graduate
          </div>
          <div className="education-checks">
             <input type="radio"  name="education" value="Diploma" onChange={onChange}/>Diploma
          </div>
          <div className="education-checks">
             <input type="radio"  name="education" value="Associate Degree" onChange={onChange}/>Associate Degree
          </div>
          <div className="education-checks">
             <input type="radio"  name="education" value="Degree" onChange={onChange}/>Degree
          </div>
          <div className="education-checks">
             <input type="radio"  name="education" value="Masters" onChange={onChange}/>Masters
          </div>
          <div className="education-checks">
             <input type="radio"  name="education" value="PhD" onChange={onChange}/>PhD
          </div>          
       </div>
    </div>
  );
}


export default EducationSection;
