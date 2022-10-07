import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import CoinHeader from "../components/CoinHeader";
import ModalGifs from "../components/Gifs/ModalGifs";
import ModalGifs2 from "../components/Gifs/ModalGifs2";

const Navbar = () => {
  const [openModalGif1, setOpenModalGif1] = useState(false);
  const [openModalGif2, setOpenModalGif2] = useState(false);

  const handleOpenModalGif1 = () => {
    setOpenModalGif1(true);
  };
  const handleCloseModalGif1 = () => {
    setOpenModalGif1(false);
  };
  const handleOpenModalGif2 = () => {
    setOpenModalGif2(true);
  };
  const handleCloseModalGif2 = () => {
    setOpenModalGif2(false);
  };

  return (
    <div className="navbar-box">
      <div className="Navbar">
        <div className="icon-box">
          <Link className="navBar-links" id="navBar-links-icon" to="/">
            Coin<span className="span1">Vault</span>
          </Link>
        </div>
        <CoinHeader
          handleOpenModalGif1={handleOpenModalGif1}
          handleOpenModalGif2={handleOpenModalGif2}
        />
        <ModalGifs
          openModalGif1={openModalGif1}
          handleCloseModalGif1={handleCloseModalGif1}
        />
        <ModalGifs2
          openModalGif2={openModalGif2}
          handleCloseModalGif2={handleCloseModalGif2}
        />
        <div className="link-box">
          <Link className="navBar-links" to="/market">
            Market
          </Link>
          <Link className="navBar-links" to="/favourites">
            Vault
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
