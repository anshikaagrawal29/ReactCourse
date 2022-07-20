import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, {useState} from 'react';

/*Added new Component and Learned PropTypes and Prop...*/
function App() {
  const[mode, setMode] = useState('light');
  const[pageStyle, setStyle] = useState({
    backgroundColor : 'grey'
  })

  const toggleModeClick = () =>
  {
      if(mode === 'dark')
      {
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
      else
      {
        setMode('dark');
        document.body.style.backgroundColor = '#adb5bd';
      }
  }

  return (
    <>
    <Navbar title="Convert Text" aboutText = "About" mode={mode} toggleModeClick = {toggleModeClick}/>
    <div className="container" mode={mode}>
    <TextForm mode={mode}/>
      </div>
    </>
  );
}

export default App;
