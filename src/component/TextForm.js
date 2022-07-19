import React, {useState} from 'react'

export default function TextForm() {
 const[text, setText] = useState("Enter Your Text Here..")

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
    <div>
        <h3> Enter Your Text Here: </h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={onchangeOfMyText} id="myText" rows="8"></textarea>
            <div class="row">
                <div className="col-2">
                <button type="button" onClick={setUpValueOfMyText} className="btn btn-primary btn-sm my-3" >Convert to Upper Case</button>
                </div>
                <div className="col-2">
                <button type="button" onClick={setLoValueOfMyText} className="btn btn-primary btn-sm my-3">Convert to Lower  Case</button>
                </div>
            </div>
        </div>
    </div>
  )
}
