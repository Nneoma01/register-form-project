import "../components/event.css";

const EventSection = () => {

  return (
    <div className="event-section">
       <div className="event-text">
          <div className="event" for="email">How did you hear about this event? <label className="tick">*</label></div>
          <div className="event-checks">
             <input type="radio" name="event" ></input>LinkedIn
          </div>
          <div className="event-checks">
             <input type="radio" name="event"></input>Instagram
          </div>
          <div className="event-checks">
             <input type="radio" name="event"></input>Twitter (X)
          </div>
          <div className="event-checks">
             <input type="radio" name="event"></input>Family/Friends
          </div>
          <div className="event-checks">
             <input type="radio" name="event"></input>Referral
          </div>
          <div className="event-checks">
             <input type="radio" name="event"placeholder="Your answer"></input>Other: <input type="texts" id="name" name="email"></input>
          </div>
          
       </div>
    </div>
  );
}


export default EventSection;
