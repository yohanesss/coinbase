import React from "react";

const styles = {
  button: `bg-[#6188ff] px-5 py-2 rounded-lg`,
};

export const Button = ({ label, onPress }) => {
  return (
    <div className={styles.button} onPress={onPress}>
      {label}
    </div>
  );
};
