import "./SpivakovStyles.css";
import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Spivakov = () => {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const navigate = useNavigate();
  
  const changeColor = (condition) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (condition === "backgroundColor") {
      setColor(randomColor);
    } else if (condition === "fontColor") {
      setTextColor(randomColor);
    }
  };

  return (
    <div className="wrapper" style={{ backgroundColor: "#" + color }}>
      <div className="sideblock">
        <div className="nameBlock">
          <h1 style={{ color: "#" + textColor }}> Spivakov page</h1>
          <button
            onClick={() => {
              changeColor("backgroundColor");
            }}
          >
            change bg
          </button>
          <button
            onClick={() => {
              changeColor("fontColor");
            }}
          >
            change font
          </button>
        </div>
      </div>
      <div className="sideblock">
        <p>HTML/CSS/JS</p>

        <button
          onClick={() => {
            navigate("/spivakov/form");
          }}
        >
          go to form
        </button>
        <Routes>
          <Route
            path={"/form"}
            element={
              <h1>
                {" "}
                <button
                  onClick={() => {
                    navigate("/spivakov");
                  }}
                >
                  go back
                </button>
                FORM
              </h1>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Spivakov;
