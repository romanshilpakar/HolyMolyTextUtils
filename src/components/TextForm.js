import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    

    const handleUpClick = () => {
        // console.log("clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case.", "success");

    }

    const handleLoClick = () => {
     
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower case.", "success");

  }

  const handleClear = () => {
     
    let newText = "";
    setText(newText);
    props.showAlert(" Text Cleared.", "success");

}

const handleSentence = () => {
     
    let n=text.split(".");
    let vfinal=""
    for( let i=0;i<n.length;i++){
    let spaceput=""
    let spaceCount=n[i].replace(/^(\s*).*$/,"$1").length;
    n[i]=n[i].replace(/^\s+/,"");
    let newText=n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
    for(let j=0;j<spaceCount;j++)
    spaceput=spaceput+" ";
    vfinal=vfinal+spaceput+newText+".";
 }
  vfinal=vfinal.substring(0, vfinal.length - 1);
  setText(vfinal);
  props.showAlert("Converted to Sentence case.", "success");

}

const handleSpace = () => {
  let newText= text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("All extra spaced removed.", "success");
}

const handleCopy = () => {
  
  // navigator.clipboard.writeText(text);
  // props.showAlert("Coppied to clipboard.", "success");

 
        var text = document.getElementById("myBox");
        text.select(); 
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
}

const handleDownload = () => {
  let newText = "";
  setText(newText);
  props.showAlert("Downloaded", "success");

}


    const handleOnChange = (event) => {
        // console.log("onChange" );
        setText(event.target.value);

    }


  return (
    <>

    <div className= "container my-2" style={{color: props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange = {handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'balck' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0}  type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Upper case</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lower case</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleSentence}>Sentence case</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to Clipboard</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleDownload}>Download text</button>





    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black' }}>
      <h2>Your text summary</h2>
      <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Nothing to preview."}</p>
    </div>
    </>
  )
}
