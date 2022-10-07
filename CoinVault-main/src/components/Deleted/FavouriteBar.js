import React from "react";
import { UilArrowGrowth, UilChartDown } from "@iconscout/react-unicons";

const FavouriteBar = (props) => {
  const slicedData = props.watchListApp.slice(0, 5);

  return (
    <>
      <aside className="aside">
        <nav className="nav-favourite">
          <h3 className="topCoin-header">Favs</h3>
          <div className="aList">
            {slicedData.map((item) => {
              return (
                <div
                  className="favourite-items-left"
                  key={item.id + Math.random() * 1000}
                >
                  <img
                    className="favourite-coin-icon"
                    src={item.image.small}
                    alt="favouriteicons"
                  />
                  <div className="favourite-items-right">
                    <div className="a">
                      {item.market_data.price_change_percentage_24h}
                    </div>
                    {item.market_data.price_change_percentage_24h >= 0 ? (
                      <div>
                        <UilArrowGrowth className="favourite-pricechange-icon-green" />
                      </div>
                    ) : (
                      <UilChartDown className="favourite-pricechange-icon-red" />
                    )}
                    <div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default FavouriteBar;
