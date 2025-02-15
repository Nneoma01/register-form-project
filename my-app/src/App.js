import './App.css';
import HeaderSection from './components/header';
import InfoSection from './components/info';
import NameSection from './components/name';

function App() {
  return (
    <div className="App-body">
      <HeaderSection />
      <InfoSection/>
      <NameSection/>
    </div>
  );
}

export default App;
