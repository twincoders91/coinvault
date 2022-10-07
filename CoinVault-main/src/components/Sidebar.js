import React from "react";

const Sidebar = (props) => {
  return (
    <>
      <aside className="aside">
        <nav className="nav">
          <h3 className="topCoin-header">Top 5</h3>
          <div className="aList">
            {props.topCoin.map((item) => {
              return (
                <div className="ranking-items" key={item.id}>
                  <p className="ranking-number">Rank #{item.rank}</p>
                  <a
                    className="a"
                    href={item.explorer}
                    target="_blank"
                    key={item.id}
                  >
                    {item.symbol}
                  </a>
                </div>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
