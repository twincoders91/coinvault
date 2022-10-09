import React from "react";
import "./coinheader.css";

const CoinHeader = (props) => {
  return (
    <div className="coin-icon-box">
      <img
        className="coin-icons-easter-egg"
        src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        alt="coin-icon-images"
        onClick={props.handleOpenModalGif1}
      />
      <img
        className="coin-icons"
        src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850"
        alt="coin-icon-images"
      />
      <img
        className="coin-icons-easter-egg"
        src="https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256"
        alt="coin-icon-images"
        onClick={props.handleOpenModalGif2}
      />
      <img
        className="coin-icons"
        src="https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446"
        alt="coin-icon-images"
      />
      <img
        className="coin-icons"
        src="https://assets.coingecko.com/coins/images/12632/large/pancakeswap-cake-logo_%281%29.png?1629359065"
        alt="coin-icon-images"
      />
      <img
        className="coin-icons"
        src="https://assets.coingecko.com/coins/images/878/large/decentraland-mana.png?1550108745"
        alt="coin-icon-images"
      />
      <img
        className="coin-icons"
        src="https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644"
        alt="coin-icon-images"
      />
      <img
        className="coin-icons"
        src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        alt="coin-icon-images"
      />
      <img
        className="coin-icons"
        src="https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"
        alt="coin-icon-images"
      />
      <img
        className="coin-icons"
        src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
        alt="coin-icon-images"
      />
      <img
        className="coin-icons"
        src="https://assets.coingecko.com/coins/images/8284/large/01_LunaClassic_color.png?1653547790"
        alt="coin-icon-images"
      />
    </div>
  );
};

export default CoinHeader;
