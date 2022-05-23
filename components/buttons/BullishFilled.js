import React from "react";
import ChevrownUp from "../../assets/svg/chevronUp";

export const BullishFilled = () => {
  return (
    <div className="flex items-center">
      <ChevrownUp fill="#17C784" />
      <small className="ml-1 text-[##17C784]">Bullish</small>
    </div>
  );
};
