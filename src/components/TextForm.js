import React, {useState} from 'react'
export default function TextForm(props) {
  const handleupclick =()=>{
  // console.log("Uppercase was clicked");
  let newtext=text.toUpperCase();
  setText(newtext)
  props.showalert("Converted to Uppercase","success")

}
  const handleloclick =()=>{
  // console.log("Uppercase was clicked");
  let newtext=text.toLowerCase();
  setText(newtext)
  props.showalert("Converted to Lowercase","success")
}
  const handleonChange =(event)=>{
  // console.log("On chage");
  setText(event.target.value);
}
  const handleclearclick =(event)=>{
  // console.log("On chage");
  // setText(event.target.value);
  let newtext='';
  setText(newtext)
  props.showalert("Text is Cleared","success")
}
  const [text, setText]=useState('');
const handlecopy=()=>{
  var text=document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value)
  props.showalert("Copied to Clipboard","success")
}
const removeextraspace=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "))
  props.showalert("Extra spaces removed","success")
}
  return (
    <>    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black' }} className="form-control" id="myBox" rows="8" onChange={handleonChange} value={text}> </textarea>
    </div>
    <button className="btn btn-primary" onClick={handleupclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lowercase</button>
    <button className="btn btn-primary" onClick={handleclearclick}>Clear text</button>
    <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy text</button>
    <button className="btn btn-primary mx-2" onClick={removeextraspace}>Remove extra spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} <b>words</b> and {text.length} <b>characters</b> </p>
      <p>{0.008*text.split(" ").length} <b> Minutes </b>required to read this text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter a text into above Box to preview it here"}</p>
    </div>
    </>

  )
}
