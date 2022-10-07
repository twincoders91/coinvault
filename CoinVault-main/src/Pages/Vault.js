import React, { useState, useEffect } from "react";
import "../styles.css";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import CoinCard from "../components/CoinCard";
import WatchList from "../components/WatchList";
import CoinCardError from "../components/CoinCardError";
import Modal from "../components/Modal";
import fingerpoint from "../assets/fingerpoint.png";

export default function Vault(props) {
  const [coinList, setCoinList] = useState([]);
  const [topCoin, setTopCoin] = useState([]);
  const { watchListApp } = props;
  const [isShown, setIsShown] = useState(false);

  //=================================================================
  //========================= TOP 5 COINS ===========================
  //=================================================================
  const getTopCoin = async (url) => {
    const res = await fetch(`https://api.coincap.io/v2/assets`);
    const data = await res.json();
    setTopCoin(data.data.slice(0, 5));
  };

  useEffect(() => {
    getTopCoin();
    fetchCoin(props.userInput);
  }, [props.userInput, setTopCoin]);

  //=================================================================
  //========================= SEARCH COINS ==========================
  //=================================================================
  let userKeyedValue = null;
  const handleSetSearch = (event) => {
    userKeyedValue = event.target.value;
  };
  const handleSearch = (event) => {
    event.preventDefault();
    props.setUserInput(userKeyedValue);
  };

  const fetchCoin = async (item) => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${item}?community_data=true&developer_data=true`
        // `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${item}&order=market_cap_desc&per_page=1000&page=1&sparkline=false/`
      );
      const data = await res.json();
      setCoinList(data);
      console.log("data");
      console.log(data);
    } catch (e) {
      console.log("error");
    }
  };

  //=================================================================
  //======================= WATCHLIST ARRAY  ========================
  //=================================================================
  let watchListClicked = props.watchListClicked;
  let setWatchListClicked = props.setWatchListClicked;

  const addToCart = (item) => {
    props.setWatchListApp([...props.watchListApp, item]);
    setWatchListClicked(true);
  };
  const watchListFromApp = props.watchListApp;

  const removeFromCart = (index) => {
    const watchListArry = props.watchListApp.filter((d, i) => d.id !== index);
    props.setWatchListApp(watchListArry);
  };

  //=================================================================
  //========================== OPEN MODAL  ==========================
  //=================================================================
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  //=================================================================
  //============================ CHART  =============================
  //=================================================================
  const [openModalDetails, setOpenModalDetails] = useState("");
  const [coinDetails, setCoinDetails] = useState("");

  //================= Set ModalDetails to item.id ===================
  //==================== watchlistfromApp data ======================
  const handleOpenModalDetails = (modalData) => {
    setOpenModal(true);
    setOpenModalDetails(modalData.id);

    //======================== CHART (left) =========================
    setCoinDetails(modalData);
  };

  console.log("watchListApp");
  console.log(watchListApp);

  //===================================================================

  return (
    <>
      <div className="App">
        <div className="main-box">
          <div className="main-content">
            <MainContent
              handleSearch={handleSearch}
              handleSetSearch={handleSetSearch}
            />
          </div>
          <div className="main-body-with-sidebar-coincard">
            <div className="sidebar-box">
              <Sidebar topCoin={topCoin} />
            </div>
            <div className="searched-coin-list">
              {coinList.market_data ? (
                <CoinCard
                  coinList={coinList}
                  addToCart={addToCart}
                  watchListFromApp={watchListFromApp}
                  watchListApp={watchListApp}
                  removeFromCart={removeFromCart}
                  setIsShown={setIsShown}
                />
              ) : (
                <CoinCardError coinList={coinList} addToCart={addToCart} />
              )}
            </div>
            <div className="finger-pointing-box">
              {isShown && props.watchListApp.length == 0 ? (
                <img className="finger-pointing-image" src={fingerpoint} />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div>
          {watchListClicked ? (
            <WatchList
              removeFromCart={removeFromCart}
              setOpenModal={setOpenModal}
              openModal={openModal}
              handleOpenModalDetails={handleOpenModalDetails}
              watchListFromApp={watchListFromApp}
            />
          ) : (
            <></>
          )}
        </div>
        <Modal
          openModal={openModal}
          closeModal={closeModal}
          openModalDetails={openModalDetails}
          coinDetails={coinDetails}
        />
      </div>
    </>
  );
}
