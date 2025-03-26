
import './App.css'


import TeamMemberCards from './TeamMemberCard'

function App() {

  return (
    <>
      
      <h1>Team Member Details</h1>
      <p>Please fill your name and job title below</p>

      <div className="card">
        <input className='name-input' type="text" />
        <input className='jon-title'  type="text" />
        <br />
        <button className='button-class' onClick={() => <TeamMemberCards/>}>
          Submit
        </button>
        
      </div>
     
    </>
  )
}

export default App
