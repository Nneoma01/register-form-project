import "../components/event.css";

const EventSection = () => {

  return (
    <div className="event-section">
       <div className="event-text">
          <div className="event" for="email">How did you hear about this event? <label className="tick">*</label></div>
          <div className="event-checks">
             <input type="radio" name="event" ></input>
             <label htmlFor="event">LinkedIn</label>
          </div>
          <div className="event-checks">
             <input type="radio" name="event"></input>
             <label htmlFor="event">Instagram</label>
          </div>
          <div className="event-checks">
             <input type="radio" name="event"></input>
             <label htmlFor="event">Twitter (X)</label>
          </div>
          <div className="event-checks">
             <input type="radio" name="event"></input>
             <label htmlFor="event">Family/Friends</label>
          </div>
          <div className="event-checks">
             <input type="radio" name="event"></input>
             <label htmlFor="event">Referral</label>
          </div>
          <div className="event-checks">
             <input type="radio" name="event"placeholder="Your answer"></input>
             <label htmlFor="event">Other:</label><input type="texts" id="name" name="email"></input>
          </div>
          
       </div>
    </div>
  );
}


export default EventSection;
