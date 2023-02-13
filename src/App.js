
// import { useState, useSyncExternalStore } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[alert, setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
setalert(null)
    },1500)
  }
 const [mode, setmode] =useState('light');
const togglemode=()=>{
if(mode==='light'){
  setmode('dark');
  document.body.style.backgroundColor='#042743';
  showalert("Dark mode is enabled","success");
  document.title="Textutils-Dark Mode";
//   setInterval(()=>{
// document.title="Textutils-Dark Mode";
//   },2000)
}
else{
  setmode('light');
  document.body.style.backgroundColor='white';
  showalert("Light mode is enabled","success");

  document.title="Textutils-Light Mode";
}
 }
  return (
<>

<Navbar title="Textutils" textabout="About us" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-3">

         <TextForm heading="Enter your text to analyze" showalert={showalert} mode={mode}/>
        </div>
       
</>
  );
}

export default App;
