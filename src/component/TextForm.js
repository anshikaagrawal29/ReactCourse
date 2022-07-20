import React, {useState} from 'react'

export default function TextForm() {
 const[text, setText] = useState("")
 const[btnText, setBtnText] = useState("Enable Dark Mode")
 const[enableDarkModeStyle, setEnableDarkModeStyle] = useState(
    {
        backgroundColor : 'white',
        color : 'black'
    }
 )
 
 const setUpValueOfMyText = () =>
 {
    let newtext = text.toUpperCase();
    setText(newtext)
 }

 const onchangeOfMyText = (event) =>
 {
    setText(event.target.value)
 }

 const setLoValueOfMyText = () =>
 {
    let lowerText = text.toLowerCase();
    setText(lowerText)
 }

 const  getLength = () =>
 {
    if(text.length === 0)
    return "0";
    else
    return text.split(" ").length;
 }

 const clearMyText = () =>
 {
    setText("");
 }

 const enableDarkMode = () =>
 {
    if(enableDarkModeStyle.backgroundColor === 'white')
    {
        setEnableDarkModeStyle({
            backgroundColor : 'grey',
            color : 'white'
        })

        setBtnText("Enable Light Mode")
    }
    else
    {
        setEnableDarkModeStyle({
            backgroundColor : 'white',
            color : 'black'
        })

        setBtnText("Enable Dark Mode")
    }
    
 }

  return (
   <>
    <div className="container" style={enableDarkModeStyle}>
    <h3 className="my-2 col-6 mx-10"> Enter Your Text Here:</h3>
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onchangeOfMyText} id="myText" rows="8"></textarea>
            <button type="button" onClick={setUpValueOfMyText} className="btn btn-primary btn-sm mx-2 my-2" >Convert to Upper Case</button>
            <button type="button" onClick={setLoValueOfMyText} className="btn btn-primary btn-sm mx-2 my-2">Convert to Lower  Case</button>
            <button type="button" onClick={clearMyText} className="btn btn-primary btn-sm mx-2 my-2">Clear Text</button>
            <button type="button" onClick={enableDarkMode} className="btn btn-primary btn-sm mx-2 my-2">{btnText}</button>  
        </div>
    </div>
     <div className="container">
        <hr></hr>
        <h3> Your Summary:</h3>
        <p>Text words Count : {getLength()} and Text Length is: {text.length}</p>
        <h3>Preview: </h3>
        <p>{text}</p>
     </div>
     </>
  )
}
