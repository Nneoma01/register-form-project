import './App.css';
import React, { useState} from 'react';
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

  const [values, setValues] = useState({
    fullname: '',
    email: '',
    occupation: '',
    location: '',
    gender: '',
    education: '',
    event: ''
  });
  
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }
  
  return (

    <form className="App-body" onSubmit={handleSubmit}>
      <HeaderSection />
      <InfoSection/>
      <NameSection value={values.fullname} onChange={handleChanges}/>
      <EmailSection value={values.email} onChange={handleChanges}/>
      <GenderSection value={values.gender} onChange={handleChanges}/>
      <OccupationSection value={values.occupation} onChange={handleChanges}/>
      <EducationSection value={values.education} onChange={handleChanges}/>
      <LocationSection value={values.location} onChange={handleChanges}/>
      <EventSection value={values.event} onChange={handleChanges}/>
      <FooterSection/>
    </form>
  );
}

export default App;
