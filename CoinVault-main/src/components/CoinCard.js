import React from "react";
import { UilSave } from "@iconscout/react-unicons";
import { UilTrashAlt } from "@iconscout/react-unicons";

const CoinCard = (props) => {
  console.log(props.watchListApp);
  const isFav = () =>
    props.watchListApp.find((e) => e.id === props.coinList.id);

  //================ Add coinList into watchList Array ================
  //===================== through Button onClick ======================
  function watchList() {
    const x = props.coinList;

    return (
      <>
        {isFav() ? (
          <UilTrashAlt
            className="favourite-icon-delete"
            onClick={() => {
              props.removeFromCart(x.id);
            }}
          ></UilTrashAlt>
        ) : (
          <UilSave
            className="favourite-icon"
            onClick={() => {
              props.addToCart(x);
              console.log("props.coinList added to watchListApp");
            }}
            onMouseEnter={() => props.setIsShown(true)}
            onMouseLeave={() => props.setIsShown(false)}
          ></UilSave>
        )}
      </>
    );
  }
  //====================================================================

  return (
    <>
      <div>
        <div className="coin-container">
          <div className="coin-inner-boxes" id="coin-inner-boxes-header">
            <div className="data-content-header-box">
              <h1 className="data-content-header">
                {props.coinList.name.split(" ").join("")}
              </h1>
            </div>
            <div className="coin-container-button-box">{watchList()}</div>
          </div>
          <div className="coin-inner-boxes">
            <div className="rank-box">
              <span className="rank-icon">
                Rank # {props.coinList.market_data.market_cap_rank}
              </span>
            </div>
            <div className="data-content">
              <div className="data-content-left">
                <img
                  className="coin-image"
                  src={props.coinList.image.large}
                  alt="images"
                ></img>
                <p className="data-content-results-font">
                  {props.coinList.name}
                </p>
                <p className="data-content-results-font">
                  {props.coinList.symbol.toUpperCase()}/USD
                </p>
              </div>
              <div className="data-content-right">
                {props.coinList.market_data.current_price.usd < 1 ? (
                  <p className="data-content-results-font-price">
                    ${props.coinList.market_data.current_price.usd.toFixed(4)}
                  </p>
                ) : (
                  <p className="data-content-results-font-price">
                    $
                    {props.coinList.market_data.current_price.usd.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="coin-inner-boxes">
            <div className="data2-content">
              <div className="data2-content-left">
                <div className="rows">
                  <h3 className="data2-content-fonts">Market Cap</h3>
                  {props.coinList.market_data.market_cap.usd ? (
                    <p id="data2-content-results-fonts">
                      $
                      {props.coinList.market_data.market_cap.usd.toLocaleString()}{" "}
                    </p>
                  ) : (
                    <div className="data2-error-content">
                      <p className="data2-content-results-fonts-error">
                        Not Found
                      </p>
                    </div>
                  )}
                </div>
                <div className="rows">
                  <h3 className="data2-content-fonts">All Time High</h3>
                  {props.coinList.market_data.ath.usd ? (
                    <p id="data2-content-results-fonts">
                      ${props.coinList.market_data.ath.usd.toLocaleString()}{" "}
                    </p>
                  ) : (
                    <div className="data2-error-content">
                      <p className="data2-content-results-fonts-error">
                        Not Found
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="data2-content-right">
                <div className="rows">
                  <h3 className="data2-content-fonts">24 Hour High</h3>
                  {props.coinList.market_data.high_24h.usd ? (
                    <p id="data2-content-results-fonts">
                      $
                      {props.coinList.market_data.high_24h.usd.toLocaleString()}{" "}
                    </p>
                  ) : (
                    <div className="data2-error-content">
                      <p className="data2-content-results-fonts-error">
                        Not Found
                      </p>
                    </div>
                  )}
                </div>
                <div className="rows">
                  <h3 className="data2-content-fonts">24 Hour Low</h3>
                  {props.coinList.market_data.low_24h.usd ? (
                    <p id="data2-content-results-fonts">
                      ${props.coinList.market_data.low_24h.usd.toLocaleString()}{" "}
                    </p>
                  ) : (
                    <div className="data2-error-content">
                      <p className="data2-content-results-fonts-error">
                        Not Found
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCard;
