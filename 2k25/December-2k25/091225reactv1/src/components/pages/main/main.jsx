import React, { useState } from "react";
import styles from "./main.module.css";
const main = () => {
  const [color, setColor] = useState("lightGray");
  const changeColor = () => {
    setColor(color === "lightgray" ? "skyblue" : "lightgray");
  };
  return (
    <div className={styles.container}>
      <div className={styles.box} style={{ backgroundColor: color }}></div>

      <button onClick={changeColor} className={styles.btn}>
        Change Color
      </button>
    </div>
  );
};

export default main;
