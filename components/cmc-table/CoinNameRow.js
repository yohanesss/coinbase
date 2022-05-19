import React from "react";
import Image from "next/image";

import btc from "../../assets/btc.png";
import eth from "../../assets/eth.png";
import usdc from "../../assets/usdc.png";
import usdt from "../../assets/usdt.png";
import xrp from "../../assets/xrp.png";
import cardano from "../../assets/cardano.png";
import tera from "../../assets/tera.png";
import solana from "../../assets/solana.png";
import avalanche from "../../assets/avalanche.png";
import bnb from "../../assets/bnb.png";

const styles = {
  coinNameRow: `flex items-center`,
  buyButton: `bg-[#1A1F#A] text-[#6188FF] p-1 px-3 rounded-lg cursor-pointer hover:opacity-20`,
};

export const CoinNameRow = ({ name, icon, clicked }) => {
  const coinIcon = (coinName) => {
    switch (coinName) {
      case "Bitcoin":
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "Bitcoin":
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "Ethereum":
        return (
          <Image
            src={eth}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "Bitcoin":
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "Bitcoin":
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "Tether":
        return (
          <Image
            src={usdt}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "BNB":
        return (
          <Image
            src={bnb}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "USD Coin":
        return (
          <Image
            src={usdc}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "XRP":
        return (
          <Image
            src={xrp}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "Cardano":
        return (
          <Image
            src={cardano}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "Tera":
        return (
          <Image
            src={tera}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "Solana":
        return (
          <Image
            src={solana}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      case "Avalanche":
        return (
          <Image
            src={avalanche}
            className="rounded-full"
            width={20}
            height={20}
            alt="Bitcoin"
          />
        );
      default:
        return (
          <Image
            src={btc}
            className="roounded-full"
            width={20}
            height={20}
            alt=""
          />
        );
    }
  };

  return (
    <div className={styles.coinNameRow}>
      <div className="mr-3 flex" onClick={clicked}>
        <div className="mr-2">{coinIcon(name)}</div>
        {name}
      </div>
      <p>
        {name === "Bitcoin" || name === "Ethereum" || name === "Tether" ? (
          <span className={styles.buyButton}>Buy</span>
        ) : null}
      </p>
    </div>
  );
};
