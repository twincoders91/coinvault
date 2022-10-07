import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Vault from "./Pages/Vault";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";

const App = () => {
  const [watchListApp, setWatchListApp] = useState([]);
  const [watchListClicked, setWatchListClicked] = useState(false);
  const [userInput, setUserInput] = useState(null);
  const [sortClick, setSortClick] = useState(false);
  const [sortClickPrice, setSortClickPrice] = useState(false);

  //=================================================================
  //====================== COIN ICON CHOICE =========================
  //=================================================================
  const handleClick = (element) => {
    setUserInput(element);
  };

  //=================================================================
  //======================== SORTING ARRAY ==========================
  //=================================================================
  const runSorting = () => {
    const sortById = (items) =>
      [...items].sort((itemA, itemB) => itemA.id.localeCompare(itemB.id));
    const sortedOutput = sortById(watchListApp);
    setWatchListApp(sortedOutput);
    setSortClick(true);
  };
  const runSortingReverse = () => {
    const sortById = (items) =>
      [...items].reverse((itemA, itemB) => itemA.id.localeCompare(itemB.id));
    const sortedOutput = sortById(watchListApp);
    setWatchListApp(sortedOutput);
    setSortClick(false);
  };
  const runSortingByPrice = () => {
    const sortByPrice = (items) =>
      [...items].sort(
        (itemA, itemB) =>
          itemA.market_data.current_price.usd -
          itemB.market_data.current_price.usd
      );
    const sortedOutput = sortByPrice(watchListApp);
    setWatchListApp(sortedOutput);
    setSortClickPrice(true);
  };
  const runSortingByPriceReverse = () => {
    const sortByPrice = (items) =>
      [...items].reverse(
        (itemA, itemB) =>
          itemA.market_data.current_price.usd -
          itemB.market_data.current_price.usd
      );
    const sortedOutput = sortByPrice(watchListApp);
    setWatchListApp(sortedOutput);
    setSortClickPrice(false);
  };
  console.log(watchListApp);
  console.log(`sortclickprice ${sortClickPrice}`);
  console.log(`sortclickname ${sortClick}`);
  //=================================================================

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mainbody">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setUserInput={setUserInput}
                userInput={userInput}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path="/market"
            element={
              <Vault
                watchListApp={watchListApp}
                setWatchListApp={setWatchListApp}
                watchListClicked={watchListClicked}
                setWatchListClicked={setWatchListClicked}
                userInput={userInput}
                setUserInput={setUserInput}
                runSorting={runSorting}
                runSortingReverse={runSortingReverse}
                setSortClick={setSortClick}
                sortClick={sortClick}
                setSortClickPrice={setSortClickPrice}
                sortClickPrice={sortClickPrice}
                runSortingByPrice={runSortingByPrice}
                runSortingByPriceReverse={runSortingByPriceReverse}
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                watchListApp={watchListApp}
                setWatchListApp={setWatchListApp}
                runSorting={runSorting}
                runSortingReverse={runSortingReverse}
                sortClick={sortClick}
                runSortingByPrice={runSortingByPrice}
                runSortingByPriceReverse={runSortingByPriceReverse}
                sortClickPrice={sortClickPrice}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
