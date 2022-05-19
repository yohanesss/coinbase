import Image from "next/image";
import React from "react";
import { Rate } from "./cmc-table/Rate";

const styles = {
  trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
};

export const TrendingCardRow = ({
  number,
  icon,
  name,
  symbol,
  isIncrement,
  rate,
}) => {
  return (
    <div className={styles.trendingCardRow}>
      <p className="opacity-40">{number}</p>
      <div className="w-full flex justify-between">
        <div className="flex">
          <div className="mx-5">
            {icon && <Image src={icon} width={20} height={20} alt={name} />}
          </div>
          <p className="font-bold">
            {name} - <span className="text-gray-400">{symbol}</span>
          </p>
        </div>
        <Rate isIncrement={isIncrement} rate={rate} />
      </div>
    </div>
  );
};
