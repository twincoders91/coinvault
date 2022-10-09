import React from "react";
import { UilFileQuestion } from "@iconscout/react-unicons";
import { UilImageQuestion } from "@iconscout/react-unicons";
import "./coinCardError.css";

const CoinCardError = (props) => {
  //================ Add coinList into watchList Array ================
  //===================== through Button onClick ======================
  function watchList() {
    // const x = props.coinList;
  }

  //====================================================================

  return (
    <>
      <div>
        <div className="coin-container">
          <div className="coin-inner-boxes" id="coin-inner-boxes-header-error">
            <h1 className="data-content-header">
              Oh no, that's an invalid coin
              <span className="id-alert"> ID!</span>
            </h1>
          </div>
          <div className="coin-inner-boxes">
            <div className="rank-box">
              <span className="rank-icon">Rank # ???</span>
            </div>
            <div className="data-content">
              <div className="data-content-error-left">
                <UilImageQuestion size={50} className="error-questionmark" />
              </div>
              <div className="data-content-error-right">
                <UilFileQuestion size={50} className="error-questionmark" />
              </div>
            </div>
          </div>

          <div className="coin-inner-boxes">
            <div className="data2-content">
              <div className="data2-content-left">
                <div className="rows">
                  <h3 className="data2-content-fonts">Market Cap</h3>

                  <p className="data2-content-results-fonts">???</p>
                </div>
                <div className="rows">
                  <h3 className="data2-content-fonts">All Time High</h3>
                  <p className="data2-content-results-fonts">???</p>
                </div>
              </div>
              <div className="data2-content-right">
                <div className="rows">
                  <h3 className="data2-content-fonts">24 Hour High</h3>
                  <p className="data2-content-results-fonts">???</p>
                </div>
                <div className="rows">
                  <h3 className="data2-content-fonts">24 Hour Low</h3>
                  <p className="data2-content-results-fonts">???</p>
                </div>
              </div>
            </div>
          </div>
          <div className="coin-container-button-box">{watchList()}</div>
        </div>
      </div>
    </>
  );
};

export default CoinCardError;
