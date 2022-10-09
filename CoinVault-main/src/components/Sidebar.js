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
                <div
                  className="ranking-items"
                  key={item.id}
                  onClick={() => {
                    props.handleTop5Click(item.id);
                  }}
                >
                  <div className="a">{item.symbol}</div>
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
