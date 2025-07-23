import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [warning, setWarning]=useState(false);
const[mode,setMode]=useState(false);

function activate()
{
  setWarning(true);
}

function modee()
{
  setMode(true);
  setWarning(false);
}

function cancel()
{
  setMode(false);
  setWarning(false);
}

  return (
    <>
      {warning || mode ? false :(<button onClick={activate} className="activate">Activate</button>)}
      {warning ? (<div className='warning'>
      <h2>Warning!</h2>
      <p>Are you sure you want to activate this mode?</p>
      <button onClick={modee} className='confirm'>Confirm</button>
      <button onClick={cancel} className='cancel'>Cancel</button>
      </div>) : false }
      {mode ? (<h3 className='mode'>Mode Activated</h3>):false}
    </>
  )
}

export default App
