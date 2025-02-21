import './App.css';
import EmailSection from './components/email';
import GenderSection from './components/gender';
import HeaderSection from './components/header';
import InfoSection from './components/info';
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
    </div>
  );
}

export default App;
