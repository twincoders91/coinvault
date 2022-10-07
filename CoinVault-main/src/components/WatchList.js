import React from "react";
import "./watchList.css";
import { UilArrowGrowth, UilChartDown } from "@iconscout/react-unicons";
import { UilTrashAlt } from "@iconscout/react-unicons";

const WatchList = (props) => {
  return (
    <div className="vault-bottom-half">
      <div className="watchlist-card-main-box">
        {!props.watchListFromApp.length == 0 ? (
          <div className="watchlist-card-box">
            <div className="watchlist-card-row">
              <p
                className="watchlist-header-fonts"
                id="watchlist-header-fonts-rank"
              >
                Rank <span id="watchlist-header-fonts-rank-hashtag"> #</span>
              </p>
              <p className="watchlist-header-fonts">Coin</p>
              <p className="watchlist-header-fonts">Price</p>
              <p className="watchlist-header-fonts">24H</p>
              <p className="watchlist-header-fonts">Volume</p>
              <p className="watchlist-header-fonts">Market Cap</p>
            </div>
            {props.watchListFromApp.map((item, i) => {
              return (
                <div
                  className="watchList-individual-rows"
                  key={item.id + Math.random() * 1000}
                >
                  <div className="watchlist-delete-icon-box">
                    <UilTrashAlt
                      className="watchlist-delete-icon"
                      onClick={() => props.removeFromCart(item.id)}
                    />
                  </div>
                  <div
                    className="watchlist-inner-card-box"
                    key={item.id + Math.random() * 1000}
                    onClick={() => {
                      props.handleOpenModalDetails(item);
                    }}
                  >
                    <div className="watchlist-fonts">
                      {item.market_cap_rank != null ? (
                        <p className="watchlist-fonts">
                          {item.market_cap_rank}
                        </p>
                      ) : (
                        <p className="watchlist-fonts-error">?</p>
                      )}
                    </div>
                    <div className="watchlist-fonts">
                      <img
                        className="coin-image-watchlist"
                        src={item.image.large}
                        alt=""
                      />
                      <p className="symbol-font">{item.symbol.toUpperCase()}</p>
                    </div>
                    {item.market_data.current_price.usd < 1 ? (
                      <p className="watchlist-fonts">
                        ${item.market_data.current_price.usd.toFixed(6)}
                      </p>
                    ) : (
                      <p className="watchlist-fonts">
                        ${item.market_data.current_price.usd.toLocaleString()}
                      </p>
                    )}
                    <div className="price-change">
                      {item.market_data.price_change_percentage_24h <= 0 ? (
                        <>
                          <p className="watchlist-fonts-red">
                            {item.market_data.price_change_percentage_24h !=
                            null ? (
                              <>
                                {item.market_data.price_change_percentage_24h.toFixed(
                                  4
                                )}
                                %
                              </>
                            ) : (
                              <>Not Found</>
                            )}
                          </p>
                          {item.market_data.price_change_percentage_24h !=
                          null ? (
                            <>
                              <UilChartDown
                                className="watchlist-pricechange-icon-red"
                                // onClick={() => {
                                //   props.handleOpenModalDetails(item.id);
                                // }}
                              />
                            </>
                          ) : (
                            <>
                              <UilChartDown className="watchlist-pricechange-icon-orange" />
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <p className="watchlist-fonts-green">
                            {item.market_data.price_change_percentage_24h !=
                            null ? (
                              <>
                                {item.market_data.price_change_percentage_24h.toFixed(
                                  4
                                )}
                                %
                              </>
                            ) : (
                              <>Not Found</>
                            )}
                          </p>
                          {item.market_data.price_change_percentage_24h !=
                          null ? (
                            <>
                              <UilArrowGrowth
                                className="watchlist-pricechange-icon-green"
                                // onClick={() => {
                                //   props.handleOpenModalDetails(item.id);
                                // }}
                              />
                            </>
                          ) : (
                            <>
                              <UilArrowGrowth className="watchlist-pricechange-icon-orange" />
                            </>
                          )}
                        </>
                      )}
                    </div>
                    <p className="watchlist-fonts">
                      ${item.market_data.total_volume.usd.toLocaleString()}
                    </p>
                    <p className="watchlist-fonts">
                      ${item.market_data.market_cap.usd.toLocaleString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default WatchList;
