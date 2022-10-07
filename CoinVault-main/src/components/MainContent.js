import React from "react";

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

export default MainContent;
