import "../components/footer.css";

const FooterSection = () => {

  return (
    <div className="footer">
        <div className="footer-head">
            <div className="button">
                <div className="submit">Submit</div>
            </div>
            <div className="clear">Clear Form</div>
        </div>
        <div className="footer-body">
           <div>Never submit passwords through Google Forms</div><br/>
           <div className="footer-info">
              <div>This Content is neither created nor endorsed by Google. - <u>Terms of Service</u> - <u>Privacy Policy.</u></div><br/>
              <div>Does this form look suspicious? <u>Report</u></div><br/><br/>
              <div className="footer-end">Google Forms</div>
            </div>  
        </div>
    </div>

    
  );
}


export default FooterSection;
