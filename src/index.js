import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

import Placard from "./placard";
import "./index.css";
import reviews from "./data";

const Main = () => {
  const [value, setValue] = useState(0);
  const changePos = () => {
    console.log(value);
    if (value > 2) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  };

  const changeNeg = () => {
    console.log(value);
    if (value < 1) {
      setValue(3);
    } else {
      setValue(value - 1);
    }
  };

  const suprise = () => {
    let x = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    setValue(x);
  };

  return (
    <>
      <h1 className="main-heading">Our Team</h1>
      <Placard
        {...reviews[value]}
        changePos={changePos}
        changeNeg={changeNeg}
        suprise={suprise}
      />
    </>
  );
};

ReactDom.render(<Main />, document.getElementById("root"));
