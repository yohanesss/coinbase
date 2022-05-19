import React from "react";
import ChevronDown from "../../assets/svg/chevronDown";
import Info from "../../assets/svg/info";

const styles = {
  textIcon: `flex item-center`,
};

export const CMCTableHeader = () => {
  return (
    <tbody>
      <tr>
        <th></th>
        <th className="flex item-center">
          <b># &nbsp;</b>
          <ChevronDown />
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>24H %</th>
        <th>7D %</th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr2">Market Cap</p>
            <Info />
          </div>
        </th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr2">Volume</p>
            <Info />
          </div>
        </th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr2">Circulating Supply</p>
            <Info />
          </div>
        </th>
        <th>Last 7 Days</th>
      </tr>
    </tbody>
  );
};
