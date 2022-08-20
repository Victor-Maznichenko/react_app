import React from "react";
import styles from "./button.module.scss";

function Button({ children, fill, className }) {
  return (
    <div className={`${styles.button} ${fill ? styles.fill : ""} ${className}`}>
      {children}
    </div>
  );
}

export default Button;
