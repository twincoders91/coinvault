import React, { useState } from "react";
import { UilArrowGrowth, UilChartDown } from "@iconscout/react-unicons";
import { UilTrashAlt } from "@iconscout/react-unicons";
import "../components/favourites.css";
import ModalDuplicate from "../components/ModalDuplicate";
import monsterimage from "../assets/monstererror.png";
import thumbsupname from "../assets/thumbsupname.png";
import thumbsupprice from "../assets/thumbsupprice.png";

const Favourites = (props) => {
  const removeFromCart = (index) => {
    const favouriteArray = props.watchListApp.filter((d, i) => d.id !== index);
    props.setWatchListApp(favouriteArray);
  };

  //=========================== OPEN MODAL =============================
  const [openModalDuplicate, setOpenModalDuplicate] = useState(false);
  const closeModalDuplicate = () => {
    setOpenModalDuplicate(false);
  };

  //============================= CHART ===============================
  const [openModalDetailsDuplicate, setOpenModalDetailsDuplicate] =
    useState("");
  const [coinDetailsDuplicate, setCoinDetailsDuplicate] = useState("");

  //=========== Set modalData to item.id ===========
  //= Receive watchlist data from WatchList array =
  const handleOpenModalDetailsDuplicate = (modalData) => {
    setOpenModalDuplicate(true);
    setOpenModalDetailsDuplicate(modalData.id);

    //======= CHART (left) =======
    setCoinDetailsDuplicate(modalData);
  };

  return (
    <div className="favourite">
      <div className="thumbsup-box-fav-left">
        {props.watchListApp.length !== 0 ? (
          <img
            src={thumbsupprice}
            className="thumbsup"
            alt="thumbsupimage"
            onClick={() => {
              if (props.sortClickPrice) {
                props.runSortingByPriceReverse();
              } else {
                props.runSortingByPrice();
              }
            }}
          />
        ) : (
          <></>
        )}
      </div>
      {props.watchListApp.length !== 0 ? (
        <>
          <div className="watchlist-card-main-box">
            <div className="watchlist-card-box-favourite">
              <div className="watchlist-card-row">
                <p
                  className="watchlist-header-fonts"
                  id="watchlist-header-fonts-rank"
                >
                  Rank{" "}
                  <span className="watchlist-header-fonts-rank-hashtag">
                    {" "}
                    #
                  </span>
                </p>
                <p className="watchlist-header-fonts">Coin</p>
                <p className="watchlist-header-fonts">Price</p>
                <p className="watchlist-header-fonts">24H</p>
                <p className="watchlist-header-fonts">Volume</p>
                <p className="watchlist-header-fonts">Market Cap</p>
              </div>
              {props.watchListApp.map((item, i) => {
                return (
                  <div className="favourites-individual-box" key={item.id}>
                    <div className="watchList-individual-rows">
                      <div className="watchlist-delete-icon-box">
                        <UilTrashAlt
                          className="watchlist-delete-icon"
                          onClick={() => removeFromCart(item.id)}
                        />
                      </div>
                      <div
                        className="watchlist-inner-card-box"
                        key={item.id + Math.random() * 1000}
                        onClick={() => {
                          handleOpenModalDetailsDuplicate(item);
                          console.log("clicked");
                          console.log(openModalDuplicate);
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
                          <p>{item.symbol.toUpperCase()}</p>
                        </div>
                        {item.market_data.current_price.usd < 1 ? (
                          <p className="watchlist-fonts">
                            ${item.market_data.current_price.usd.toFixed(6)}
                          </p>
                        ) : (
                          <p className="watchlist-fonts">
                            $
                            {item.market_data.current_price.usd.toLocaleString()}
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
                                      2
                                    )}
                                    %
                                  </>
                                ) : (
                                  <>? %</>
                                )}
                              </p>
                              {item.market_data.price_change_percentage_24h !=
                              null ? (
                                <>
                                  <UilChartDown className="watchlist-pricechange-icon-red" />
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
                                      2
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
                                  <UilArrowGrowth className="watchlist-pricechange-icon-green" />
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
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <ModalDuplicate
              openModalDuplicate={openModalDuplicate}
              closeModalDuplicate={closeModalDuplicate}
              openModalDetailsDuplicate={openModalDetailsDuplicate}
              coinDetailsDuplicate={coinDetailsDuplicate}
            />
          </div>
        </>
      ) : (
        <div className="favourite-error">
          <div className="watchlist-card-box-error">
            <div className="watchlist-card-box-top">
              <div className="watchlist-card-box-description">
                <h1 className="watchlist-card-font-header">
                  Uh oh... you do not have any coins in your vault!
                </h1>
                <h3 className="minidescription">
                  Head to the market and choose your coins, don't be too picky!
                </h3>
              </div>
            </div>
            <div className="watchlist-card-box-bottom">
              <img
                src={monsterimage}
                alt="errorimage"
                className="errorimage"
              ></img>
            </div>
          </div>
        </div>
      )}
      <div className="thumbsup-box-fav">
        {props.watchListApp.length !== 0 ? (
          <img
            src={thumbsupname}
            className="thumbsup"
            alt="thumbsupimage"
            onClick={() => {
              if (props.sortClick) {
                props.runSortingReverse();
              } else {
                props.runSorting();
              }
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Favourites;
