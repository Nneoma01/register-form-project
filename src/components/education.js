import "../components/education.css";

const EducationSection = ({ value, onChange }) => {


  return (
    <div className="education-section" required>
       <div className="education-text">
          <div className="education">Education <label className="tick">*</label></div>
          <div className="education-checks">
             <input type="radio"  name="education" value={value} onChange={onChange}/>High School Graduate
          </div>
          <div className="education-checks">
             <input type="radio"  name="education" value={value} onChange={onChange}/>Diploma
          </div>
          <div className="education-checks">
             <input type="radio"  name="education" value={value} onChange={onChange}/>Associate Degree
          </div>
          <div className="education-checks">
             <input type="radio"  name="education" value={value} onChange={onChange}/>Degree
          </div>
          <div className="education-checks">
             <input type="radio"  name="education" value={value} onChange={onChange}/>Masters
          </div>
          <div className="education-checks">
             <input type="radio"  name="education" value={value} onChange={onChange}/>PhD
          </div>          
       </div>
    </div>
  );
}


export default EducationSection;
