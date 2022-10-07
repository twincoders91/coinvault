import React from "react";
import "../components/home.css";
import logo from "../assets/cat4.png";
import logo2 from "../assets/cat2.png";
import { Link } from "react-router-dom";

const Home = (props) => {
  console.log(props.userInput);
  return (
    <div className="home-container">
      <div className="cardscontainer">
        <div className="cards" id="cards-left">
          <div className="button-box">
            <h1 className="header-fonts">Explore the Markets</h1>
          </div>
          <Link to="/market" className="marketplace-image-box">
            <img className="marketplace-image" src={logo} alt="coinImage" />
          </Link>
          <div className="description">
            <h2 className="description-fonts">
              The <span className="bold-fonts">Market Place</span> is a place
              where you can freely search for crypto coins around the world! You
              can head there by clicking on Desmond the
              <span className="bold-fonts"> Bitcoin</span> or select one of the
              coins below.
            </h2>
          </div>

          <div className="coin-choices-row">
            <Link to="/market">
              <img
                onClick={() => {
                  props.handleClick("bitcoin");
                }}
                className="coin-icons"
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                alt="coin-icon-images"
              />
            </Link>
            <Link to="/market">
              <img
                onClick={() => {
                  props.handleClick("pancakeswap-token");
                }}
                className="coin-icons"
                src="https://assets.coingecko.com/coins/images/12632/large/pancakeswap-cake-logo_%281%29.png?1629359065"
                alt="coin-icon-images"
              />
            </Link>
            <Link to="/market">
              <img
                onClick={() => {
                  props.handleClick("dogecoin");
                }}
                className="coin-icons"
                src="https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256"
                alt="coin-icon-images"
              />
            </Link>
            <Link to="/market">
              <img
                onClick={() => {
                  props.handleClick("shiba-inu");
                }}
                className="coin-icons"
                src="https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446"
                alt="coin-icon-images"
              />
            </Link>
            <Link to="/market">
              <img
                onClick={() => {
                  props.handleClick("polkadot");
                }}
                className="coin-icons"
                src="https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644"
                alt="coin-icon-images"
              />
            </Link>
            <Link to="/market">
              <img
                onClick={() => {
                  props.handleClick("the-sandbox");
                }}
                className="coin-icons"
                src="https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1597397942"
                alt="coin-icon-images"
              />
            </Link>
          </div>
        </div>
        <div className="cards" id="cards-right">
          <div className="button-box">
            <h1 className="header-fonts">Enter your Vault</h1>
          </div>
          <Link to="/favourites" className="vault-image-box">
            <img className="vault-image" src={logo2} alt="astronaut" />
          </Link>
          <div className="description2">
            <h2 className="description-fonts">
              Your <span className="bold-fonts">Vault</span> is a place where
              you can store your favourite coins and actively monitor their
              market progress! You can head to your vault by clicking on Damien
              the
              <span className="bold-fonts"> Astronaut </span> above.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
