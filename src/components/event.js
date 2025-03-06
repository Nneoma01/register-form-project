import "../components/event.css";

const EventSection = ({ value, onChange }) => {

  return (
    <div className="event-section">
       <div className="event-text">
          <div className="event" for="email">How did you hear about this event? <label className="tick">*</label></div>
          <div className="event-checks">
             <input type="radio" name="event" value={value} onChange={onChange}/>LinkedIn
          </div>
          <div className="event-checks">
             <input type="radio" name="event" value={value} onChange={onChange}/>Instagram
          </div>
          <div className="event-checks">
             <input type="radio" name="event" value={value} onChange={onChange}/>Twitter (X)
          </div>
          <div className="event-checks">
             <input type="radio" name="event" value={value} onChange={onChange}/>Family/Friends
          </div>
          <div className="event-checks">
             <input type="radio" name="event" value={value} onChange={onChange}/>Referral
          </div>
          <div className="event-checks">
             <input type="radio" name="event"placeholder="Your answer" value={value} onChange={onChange}/>Other: <input type="texts" id="name" name="email"/>
          </div>
          
       </div>
    </div>
  );
}


export default EventSection;
