import React, {useState} from 'react'

export default function TextForm() {
 const[text, setText] = useState("")
 
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

  return (
   <>
    <div className="container">
        <h3 className="my-2"> Enter Your Text Here: </h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onchangeOfMyText} id="myText" rows="8"></textarea>
            <button type="button" onClick={setUpValueOfMyText} className="btn btn-primary btn-sm mx-2 my-2" >Convert to Upper Case</button>
            <button type="button" onClick={setLoValueOfMyText} className="btn btn-primary btn-sm mx-2 my-2">Convert to Lower  Case</button>
        </div>
    </div>
     <div className="container">
        <hr></hr>
        <h3> Your Summary:</h3>
        <p>Text words Count : {text.split(" ").length} and Text Length is: {text.length}</p>
        <h3>Preview: </h3>
        <p>{text}</p>
     </div>
     </>
  )
}
