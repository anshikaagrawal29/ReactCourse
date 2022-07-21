import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, {useState} from 'react';
import Alert from "./component/Alert";
import Footer from "./component/Footer";

/*Added new Component and Learned PropTypes and Prop...*/
function App() {
  const[mode, setMode] = useState('light');
  const[alertMessage, setAlertMessage] = useState(null);
  const[btnColor, setbtnColor] = useState('primary');
  
  const showAlert = (msg,typ) =>
  {
    setAlertMessage({
      message : msg,
      type : typ
    })
  }

  const[pageStyle, setStyle] = useState({
    backgroundColor : 'grey'
  })

  const OnGreenBtnClickSetColor = () =>
  {
    SetScreenMode("green");
  }

  const OnWarningBtnClickSetColor = () =>
  {
    SetScreenMode("yellow");
  }

  const OnPrimaryBtnClickSetColor = () =>
  {
    SetScreenMode("blue");
  }

  const SetScreenMode = (color) =>
  {
        if(color === 'green')
        {
          setMode('dark');
          document.body.style.backgroundColor = '#cfdfd7';
          setbtnColor('success');
        }
        if(color === 'blue')
        {
          setMode('dark');
          document.body.style.backgroundColor = '#8ea6cb';
          setbtnColor('info');
        }
        if(color === 'yellow')
        {
          setMode('dark');
          document.body.style.backgroundColor = '#e9d391';
          setbtnColor('warning');
        }
  }
  const toggleModeClick = () =>
  {
      if(mode === 'dark')
      {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        setAlertMessage({
          message : "Light Mode is Enabled!!",
          type : "success"
        });
        setbtnColor('primary');
      }
      else
      {
        setMode('dark');
        document.body.style.backgroundColor = '#adb5bd';
        setAlertMessage({
          message : "Dark Mode is Enabled!!",
          type : "success"
        });
        setbtnColor('primary');
      }
  }

  setTimeout(() => {
    setAlertMessage(null)
  }, 3000);

  return (
    <>
    <Navbar title="Convert Text" OnPrimaryBtnClickSetColor= {OnPrimaryBtnClickSetColor} OnWarningBtnClickSetColor={OnWarningBtnClickSetColor} SetScreenMode = {SetScreenMode} aboutText = "About" mode={mode} OnGreenBtnClickSetColor ={OnGreenBtnClickSetColor} toggleModeClick = {toggleModeClick}/>
    <div className="container" mode={mode}>
      <Alert alertMessage={alertMessage}/>
    <TextForm btnColor={btnColor} showAlert ={showAlert} mode={mode}/>
    <Footer/>
      </div>
    </>
  );
}

export default App;
