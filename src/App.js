import './App.css';

import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Main from './components/Main';
import Alert from './components/Alert';
import Help from './components/Help';

function App() {

    const [alert,setAlert]=useState(null);

    const showAlert =(msg,type)=>{
      setAlert({
        msg:msg,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }

    const [mode,setMode]=useState("light")
    
    function toogleMode(){
      if(mode==="light"){
        setMode("dark")
        document.body.style.backgroundColor="#15191f";
        
      }
      else{
        setMode("light")
        document.body.style.backgroundColor="#f3f5f7";
      }
    }

     return (
      <Router>
      <div>
        <Navbar mode={mode} toggleMode={toogleMode}/>
        <Alert alert={alert}/>
        <div>
        <Routes>
          <Route exact path="/" element={
            <Main mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/help" element={<Help mode={mode}/>} />
        </Routes>
        </div>
        {/* <Main mode={mode}/> */}
      </div>
      </Router>
  );
}

export default App;