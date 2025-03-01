import './App.css';
import EducationSection from './components/education';
import EmailSection from './components/email';
import EventSection from './components/event';
import FooterSection from './components/footer';
import GenderSection from './components/gender';
import HeaderSection from './components/header';
import InfoSection from './components/info';
import LocationSection from './components/location';
import NameSection from './components/name';
import OccupationSection from './components/occupation';

function App() {
  return (
    <div className="App-body">
      <HeaderSection />
      <InfoSection/>
      <NameSection/>
      <EmailSection/>
      <GenderSection/>
      <OccupationSection/>
      <EducationSection/>
      <LocationSection/>
      <EventSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
