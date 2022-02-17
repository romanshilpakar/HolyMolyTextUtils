import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
     const [mode, setMode] = useState('light');

     const [alert, setAlert] = useState(null);

     const showAlert = (message, type)=>{
       
       setAlert({
        message: message,
        type: type
       });

       setTimeout(() => {
         setAlert(null);
       }, 1500);

     }

     const toggleMode= () =>{
       if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#17194a';
        showAlert("Dark mode has been activated", "success");
        document.title = 'TextUtils - Dark mode'
       
       }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been activated", "success");
        document.title = 'TextUtils - Light mode'

        
       }

       
     }

  return (
    <>
    {/* <Router>
      <Navbar title = "HolyMoly" mode={mode} toggleMode = {toggleMode} />
      <Alert alert= {alert} />
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element= {<TextForm showAlert={showAlert} heading="Enter your text below to analyse" mode={mode} />} />
          
      </Routes>
      </div>
    </Router> */}
      
      <Navbar title = "HolyMoly" mode={mode} toggleMode = {toggleMode} />
      <Alert alert= {alert} />
      <div className="container">
      <TextForm showAlert={showAlert} heading="Enter your text below to analyse" mode={mode} />
      </div>
      

    </>
);
}

export default App;
