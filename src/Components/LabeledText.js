import React ,{useState} from "react";
import "./LabeledText.css";
const LabeledText = (props) => {
  const { height, width, texttype, label, placeholder, addInput,emailarr,setEmailArr,contactarr,setContactArr} = props;
  const[inputValue,setInputValue]=useState("")

  let arr = [];
  for (let i = 0; i <= addInput; i++) {
    arr = arr.concat(i);
  }
 

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleInputBlur = (label) => {
    if (label === "Email ID") {
      setEmailArr([...emailarr, inputValue]);
    } else if (label === "Contact Number") {
      setContactArr([...contactarr, inputValue]);
    }
    setInputValue("");
  };

 
  return (
    <div className="inputDiv">
      <label className="inputLabel">{label}</label>
      {/* {label=="Customer Number"&&( */}
      {arr.map((item) => {
        return (
          <div style={{marginTop:'10px'}}>
            <input
              style={{ width: `${width}`, height: `${height}` }}
              type={texttype}
              placeholder={placeholder}
              className="enterInput"
              onChange={(e)=>handleInputChange(e)}
              onBlur={() => handleInputBlur(label)}
            />
          </div>
        );
      })}
      {/* )} */}
    </div>
  );
};

export default LabeledText;
