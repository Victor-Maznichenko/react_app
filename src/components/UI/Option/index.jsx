import React from "react";
import styles from "./option.module.scss";

function Option({ text, disabled, className }) {
  return (
    <button
      className={`${styles.option} ${className}`}
      type="button"
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Option;
