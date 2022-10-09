import React from "react";
import { UilSearchAlt } from "@iconscout/react-unicons";
import "../styles.css";

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
        <div className="search-button-box">
          <UilSearchAlt
            className="home--page--icon--search"
            id="search-icon"
            size={30}
            onClick={props.handleSearch}
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
