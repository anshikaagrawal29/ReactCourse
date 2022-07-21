import React, {useState} from 'react'

export default function TextForm(props) {
 const[text, setText] = useState("")

 const setUpValueOfMyText = () =>
 {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase!!", "success");
 }

 const onchangeOfMyText = (event) =>
 {
    setText(event.target.value)
 }

 const setLoValueOfMyText = () =>
 {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to LowerCase!!", "success");
 }

 const  getLength = () =>
 {
    if(text.length === 0)
    {
      return "0";
    }
    else
    {
      return text.split(" ").length;
    }
    
 }

 const clearMyText = () =>
 {
    setText("");
 }
  return (
   <>
    <div className="container" style={{backgroundColor : props.mode === 'light'?'white':'#e7e9eb', color: props.mode === 'light'?'black':'black'}}>
    <h3 className="my-2 col-6 mx-10" > Enter Your Text Here:</h3>
         <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor : props.mode === 'light'?'white':'#e7e9eb', color: props.mode === 'light'?'black':'black'}} value={text} onChange={onchangeOfMyText} id="myText" rows="8"></textarea>
            <button type="button" onClick={setUpValueOfMyText} className={`btn btn-${props.btnColor} btn-sm mx-2 my-2`} >Convert to Upper Case</button>
            <button type="button" onClick={setLoValueOfMyText} className={`btn btn-${props.btnColor} btn-sm mx-2 my-2`}>Convert to Lower  Case</button>
            <button type="button" onClick={clearMyText} className={`btn btn-${props.btnColor} btn-sm mx-2 my-2`}>Clear Text</button>
        </div>
    </div>
     <div className="container" style={{backgroundColor : props.mode === 'light'?'white':'#e7e9eb', color: props.mode === 'light'?'black':'black'}}>
        <hr></hr>
        <h3> Your Summary:</h3>
        <p>Text words Count : {getLength()} and Text Length is: {text.length}</p>
        <h3>Preview: </h3>
        <p>{text}</p>
     </div>
     </>
  )
}
