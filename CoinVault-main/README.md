# CoinVault
One stop location to view your favourite coins and statistics.  This application is built using JavaScript React, HTML & CSS on VSC.

APIs from CoinGecko and CoinCap were used to tabulate the relevant data.

# Table of Contents

1. [ Project Description ](#desc)
2. [ Parent Components ](#parentcomponents)
* [App](#app)
* [Home](#home)
* [User Input](#userinput)
* [Vault](#vault)
* [WatchList Page](#watchlistpage)
3. [ Child Components ](#childcomponents)
* [Coin Card](#coincard)
* [Modals](#modals)

<a name="desc"></a>
## 1. Project Description
CoinVault is an application that allows you to freely explore the latest market data on crypto coins and stay updated via The Market Place. You can store your favourite coins in the vault and actively monitor their market progress! 

Simply key in the coin's id and you can view the data and trends.
 
<a name="parentcomponents"></a>
## 2. Creating Parent Components
<p>Multiple components will be created to handle the data and build the foundation for this application. There will be three different tiers of components.</p>

<p>Some of the parent components include:</p>
<li>App</li>
<li>Home</li>
<li>User Input</li>
<li>Vault</li>
<li>Favourites</li>
<li>NavBar</li>

<a name="app"></a>
<h3>2.1. App Component</h3>
<p>The App Component is the parent to multiple components such as</p>
<li>Home</li>
<li>Vault</li>
<li>Favourites</li>
<li>NavBar</li>

<p>React hooks such as useStates are set up to enable propping and lifting from Parent to Child and Child to Parent Components, respectively.</p>
<p>Below are the react hooks and libraries that were used in the App component. These are essential to pass data between components and using of various methods.</p>

```
import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Vault from "./Pages/Vault";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
```


<p>Some examples of useStates in the App Component are shown below. These are created to allow the seamless flow of activities from user input, to fetching of data and finally displaying them on the screen.</p>

```
const [watchListApp, setWatchListApp] = useState([]);
const [watchListClicked, setWatchListClicked] = useState(false);
const [userInput, setUserInput] = useState(null);
const [sortClick, setSortClick] = useState(false);
const [sortClickPrice, setSortClickPrice] = useState(false);
```

<p>Functions are created within the App component to perform various activities such as sorting of data and handling user inputs. </p>


<a name="home"></a>
<h3>2.2. Home Component (Main Page) </h3>
<p>The Home Component will act as the main page of the application, providing the navigation link for the uses to route between pages of the app.</p>

```
import { Link } from "react-router-dom";
```


```
<Link to="/market" className="marketplace-image-box">
 <img className="marketplace-image" src={logo} alt="coinImage" />
</Link>
```
<p>Importing the react-router-dom library and using the <Link> tag, we able to route between pages. </p>

<a name="userinput"></a>
<h3>2.3. The Main Content Component</h3>
<p>This is the component where user input will be handled </p>

<p>User's input will be tracked onChange and passed to the handleSetSearch function. Upon submission, the function handleSearch will set the userInput, which will be used to fetch the relevant data from the API. 

```
const MainContent = (props) => {
  return (
    <main>
      <div className="main-head">
        <form className="search--box" onSubmit={props.handleSearch}>
          <input
            className="search--input"
            type="search"
            placeholder="  search your coin..."
            required
            // value={props.search}
            onChange={props.handleSetSearch}
          />
        </form>
      </div>
    </main>
  );
};

```



<a name="vault"></a>
<h3>2.4. Vault Component (this is the marketplace page)</h3>
<p>The Vault parent component handles most of the data by propping and lifting through various functions within the parent-child components. </p>
<p>For example, React props are being lifted through the handle search function tied to the search button. The user's input will be stored resulting in a change in "owner" state, rendering and fetching the API. The user's input will be stored resulting in a change in "userInput" state, rendering the fetching of coin data. </p>


<p> Another react hook, the useEffect method is used to render the asynchronous fetch function whenever the "userInput" state changes, i.e. any changes in user input will excecute the fetch function using Coin Gecko's API for fetching the coin data using the coin id entered by the user. </p>

```
  const getTopCoin = async (url) => {
    const res = await fetch(`https://api.coincap.io/v2/assets`);
    const data = await res.json();
    setTopCoin(data.data.slice(0, 5));
  };

  useEffect(() => {
    getTopCoin();
    fetchCoin(props.userInput);
  }, [props.userInput, setTopCoin]);
  
```

<p> Below is an example of the asynchronous fetching of data from the Coin Gecko's API</p>

```
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
```
  
 <p> The watchlist array is being built upon in this component.</p>

<p> The user will be able to favourite to watch list any coin of their choice, this is done by creating a watchListApp array and the addToCart function. The user will also be able to remove any previously added coin data in the watch list, which is done through the removeFromCart function and by filtering out the data by id from the array.</p>

```
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

```

<p>The below code is used to handle the opening of modal by applying useState react hooks </p>

```
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
```
  
<p> Next, the data "openModalDetails" is being passed to the modal component, where it will be used to fetch API data to create the chart, which will be made using the chart.js library </p>

<p> For example, as shown below, the modalData will be set as the item.id pass from the child component.

```
  const [openModalDetails, setOpenModalDetails] = useState("");
  const [coinDetails, setCoinDetails] = useState("");

  //=========== Set modalData to item.id ===========
  //= Receive watchlist data from WatchList array =
  const handleOpenModalDetails = (modalData) => {
    setOpenModal(true);
    setOpenModalDetails(modalData.id);

    //======= CHART (left) =======
    setCoinDetails(modalData);
  };
```

<p> Data is being propped from the parent component (App) to other child components such as MainContent, CoindCard and WatchList. </p>

```
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
              runSorting={runSorting}
              runSortingReverse={runSortingReverse}
              sortClick={sortClick}
              runSortingByPrice={runSortingByPrice}
              runSortingByPriceReverse={runSortingByPriceReverse}
              sortClickPrice={sortClickPrice}
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
```


<a name="watchlistpage"></a>
<h3>2.5. Watch List Component</h3>

<p>The WatchList Page Component displays the entire collection that the user has favourite-ed.</p>

<p>The Watch List Page will display the coin card's data in a summarised line below and also contain new information such as market volume. This data is fetched from Coin Gecko's API as mentioned above. This summarised line also contains the iconic green and red chart arrows to allow users to quickly identify market movements. Multiple conditional statements will be used to ensure that the data returned from the APIs are logical for the codes set up in this application. More details can be seen below.</p>
 
<p>The user will also be allowed to trigger the modals to view additional details by passing the data's id to the handleModalDetails function as mentioned above.</p>

<p>Filter buttons are implemented to allow users to filter between highest price changes-lower price changes and more.</p>

<p>This is done by the find() method, ceiving through the array and implementing multiple conditional statements to achieve the necessary sorting as required by the user.</p>

```
const WatchList = (props) => {
  return (
    <div className="vault-bottom-half">
      <div className="thumbsup-box-left">
        {props.watchListFromApp.length !== 0 ? (
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
      <div className="thumbsup-box">
        {props.watchListFromApp.length !== 0 ? (
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

export default WatchList;
```

<a name="childcomponents"></a>
## 3. Child Components
<p>These components are the tiny blocks that hold the application together. </p>

<a name="coincard"></a>
<h3>3.1. Coin Card Component</h3>
<p>The Coin Card Component triggers the first wave of data upon user input and holds individual coin details as shown below. The data is displayed using flex box/grid for the user to admire.</p> 

<p>The details are fetched from Coin Gecko's API using the coin's id keyed in by the user upon submitting the form (i.e. search) </p>

<p> The watchList function triggers the isFav() function that pushes this data into the WatchList array via conditional statements. This function changes the save(favourite) icon into a trash icon. This conditional statements further supplement the removal of coin by id from the WatchList array when the user clicks the trash icon.</p>

```
import React, { useState } from "react";
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
    console.log(props.coinList);

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
                      {/* <UilFrown className="data2-error-icon" /> */}
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

                  {/* </p> */}
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
```


<a name="modals"></a>
<h3>3.2. Modal Component</h3>
<p> The Modal component is used as an interactive feature like a popup window, that provides the user with more specific and targeted data such as charts and trends. Theses data sets are also fetched from Coin Gecko's API using a different queries. Chart JS library and methods are used to format the data to plot the chart</p>

<p>Import the chart JS library </p>

```
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
```

<p> The openModal conditional statement is used to determine whether the modal opens </p>

```
const Modal = (props) => {
  const [chartData, setChartData] = useState(undefined);
  const [coinDetails, setCoinDetails] = useState();
  const [day, setDay] = useState(7);
  const [loading, setLoading] = useState(false);

  //=========================================================
  //==================== Chart Data API =====================
  //=== fetching chart data from useEffect(props.openModalDetails) ===
  const fetchChartData = async (item) => {
    setLoading(true);
    try {
      console.log(item);

      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${item}/market_chart?vs_currency=usd&days=${day}`
      );
      const data = await res.json();
      console.log("data of prices over time");
      console.log(data);

      //================= Coin Description API ==================
      // === fetching coin description data from useEffect() =====
      const resCoinDescription = await fetch(
        `https://api.coingecko.com/api/v3/coins/${item}?community_data=true&developer_data=true`
      );
      const dataCoinDescription = await resCoinDescription.json();
      setCoinDetails(dataCoinDescription);

      //=========================================================
      //=== convert array into x(time) and y(value) key-value pairs ===
      const coinChartData = data.prices.map((item) => {
        return {
          x: item[0],
          y: item[1],
        };
      });
      console.log("chart data converted to x and y values");
      console.log(coinChartData);

      //=========================================================
      //=============== Format the data (object) ================
      //==== into acceptable format of chart.js (Area chart) ====
      const formattedData = {
        labels: coinChartData.map((item) => {
          //format the x key (timestamp) into mmm dd
          if (day === 7) {
            return moment(item.x).format("MMM DD");
          } else if (day === 1) {
            return moment(item.x).format("h:mm a");
          }
        }),
        datasets: [
          {
            fill: true,
            label: `Price over past ${day} day(s)`,
            data: coinChartData.map((item) => item.y),
            color: "white",
            borderColor: "gold",
            backgroundColor: "rgb(0, 0, 0, 0.3)",
            borderWidth: 1.5,
            hoverBorderWidth: 3,
          },
        ],
      };
      console.log("Data of x and y formatted to price and time");
      console.log(formattedData);
      setChartData(formattedData);
      setLoading(false);
    } catch (e) {
      console.log("error");
      setLoading(false);
    }
  };

  //=========================================================
  //========== Run fetchChartData with item.id ==============
  useEffect(() => {
    if (!props.openModalDetails) return null;
    //==== watchlist data's item.id from WatchList ====
    fetchChartData(props.openModalDetails);
  }, [props.openModalDetails, day]);

  //===================== Chart Options ======================
  const options = {
    responsive: true,

    plugins: {
      title: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        ticks: {
          color: "black",
          font: {
            size: 20, //this change the font size
          },
        },
      },
      xAxes: {
        ticks: {
          color: "black",
          font: {
            size: 20, //this change the font size
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0.5,
      },
    },
  };

  //===================== Handle Day choices ======================
  function handleDays(x) {
    setDay(x);
  }
  //================================================================

  if (!props.openModal) return null;

  return (
    <div className="overlay">
      <div className="modalContainer">
        {loading ? (
          <ScaleLoader
            color={"gold"}
            loading={loading}
            height={70}
            width={8}
            radius={10}
            margin={5}
            speedMultiplier={1.2}
          />
        ) : (
          <>
            <div className="modalTop">
              <div className="modalTop-left">
                <img
                  className="coin-details-image"
                  src={props.coinDetails.image.large}
                  alt="images"
                />
              </div>
              <div className="modalTop-right">
                {/* <p onClick={props.closeModal} className="closeBtn">
              X
            </p> */}
                <UilMinusSquare
                  onClick={props.closeModal}
                  className="closeBtn"
                ></UilMinusSquare>
                <div className="coin-details-header2">
                  <h3 className="coin-details-header">
                    {props.coinDetails.name}
                  </h3>
                </div>
                {coinDetails && (
                  <div className="coin-description-box">
                    <p className="coin-description">
                      {parse(coinDetails.description.en.split(". ")[0])}
                      <br />
                      <br />
                      {parse(coinDetails.description.en.split(". ")[1])}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="modalBottom">
              <div className="day-button-box">
                <button className="day-button" onClick={() => handleDays(1)}>
                  1 Day
                </button>
                <button className="day-button" onClick={() => handleDays(7)}>
                  7 Days
                </button>
              </div>
              {/* to use chart.js <Line>, provide options and data */}
              {/* chartData must not be undefined */}
              {chartData && <Line options={options} data={chartData} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
```


