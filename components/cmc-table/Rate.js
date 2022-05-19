import React from "react";
import ChevronDown from "../../assets/svg/chevronDown";
import ChevronUp from "../../assets/svg/chevronUp";

const styles = {
  rate: `rate flex items-center`,
  red: `ml-2 text-[#e33943]`,
  green: `ml-2 text-[#17c784]`,
};

export const Rate = ({ isIncrement, rate }) => {
  return (
    <div className={styles.rate}>
      {isIncrement ? (
        <ChevronUp fill="#17c784" />
      ) : (
        <ChevronDown fill="#e33943" />
      )}
      <p className={isIncrement ? styles.green : styles.red}>{rate}%</p>
    </div>
  );
};
