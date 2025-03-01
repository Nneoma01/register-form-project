import "../components/event.css";

const EventSection = () => {

  return (
    <div className="event-section">
       <div className="event-text">
          <div className="event" for="email">Education <label className="tick">*</label></div>
          <div className="event-checks">
             <input type="radio" id="fname" name="name" ></input>
             <label for="event">LinkedIn</label>
          </div>
          <div className="event-checks">
             <input type="radio" id="fname" name="name"></input>
             <label for="event">Instagram</label>
          </div>
          <div className="event-checks">
             <input type="radio" id="fname" name="name"></input>
             <label for="event">Twitter (X)</label>
          </div>
          <div className="event-checks">
             <input type="radio" id="fname" name="name"></input>
             <label for="event">Family/Friends</label>
          </div>
          <div className="event-checks">
             <input type="radio" id="fname" name="name"></input>
             <label for="event">Referral</label>
          </div>
          <div className="event-checks">
             <input type="radio" id="fname" name="name"placeholder="Your answer"></input>
             <label for="event">Other:</label><input type="texts" id="name" name="email"></input>
          </div>
          
       </div>
    </div>
  );
}


export default EventSection;
