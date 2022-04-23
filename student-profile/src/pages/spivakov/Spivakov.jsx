import "./SpivakovStyles.css";
import { useState } from "react";

const Spivakov = () => {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");


  const changeColor = (condition) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
 if (condition === 'backgroundColor'){
  setColor(randomColor)
 } else if (condition === 'fontColor'){
  setTextColor(randomColor)
 } 


  };

  return (
    <div className="wrapper"  style={{ backgroundColor: "#" + color }}>
      <h1 style={{ color: "#" + textColor }}> Spivakov page</h1>
      <button onClick={() =>{changeColor('backgroundColor')}}>change bg</button>
      <button onClick={() =>{changeColor('fontColor')}}>change font</button>
      
    </div>
  );
};

export default Spivakov;
