import { useState } from 'react'
import './App.css'
import GeneralForm from './components/GeneralForm.jsx'
import EducationForm from './components/EducationForm.jsx'
import ExperienceForm from './components/ExperienceForm.jsx'
import GeneralDisplay from './components/GeneralDisplay.jsx'
import EducationDisplay from './components/EducationDisplay.jsx'
import ExperienceDisplay from './components/ExperienceDisplay.jsx'


function App() {
  const initialGeneralInformation = {
    name: '',
    phone: '',
    email: '',
  }
  const [generalInformation, setGeneralInformation] = useState(initialGeneralInformation)

  const initialEducationInformation = {
    'school-name': '',
    degree: '',
    'study-title': '',
    'graduation-date': '',
  }
  const [educationInformation, setEducationInformation] = useState(initialEducationInformation)


  const initialExperienceInformation = {
    'company-name': '',
    'position-title': '',
    'starting-date': '',
    'end-date': '',
    description: '',
  }
  const [experienceInformation, setExperienceInformation] = useState(initialExperienceInformation)
 
  const handleSubmit = (e, setInformation) => {
    e.preventDefault()

    setInformation(() => Object.fromEntries(new FormData(e.target)))
  }

  return (
    <>
      <div className="forms">
        <GeneralForm onSubmit={(e) => handleSubmit(e, setGeneralInformation)}/>
        <EducationForm onSubmit={(e) => handleSubmit(e, setEducationInformation)}/>
        <ExperienceForm onSubmit={(e) => handleSubmit(e, setExperienceInformation)}/>
      </div>
      <div className="display">
        <GeneralDisplay info={ generalInformation } />
        <EducationDisplay info={ educationInformation } />
        <ExperienceDisplay info={ experienceInformation } />
      </div>
    </>
  )
}

export default App
