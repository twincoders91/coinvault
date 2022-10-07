import React from "react";
import "../modal.css";

const ModalGifs = (props) => {
  if (!props.openModalGif1) return null;

  return (
    <div className="overlayGif">
      <div className="modalContainerGif">
        <img
          onClick={props.handleCloseModalGif1}
          src="https://media2.giphy.com/media/7FBY7h5Psqd20/giphy.gif?cid=0dd2610881rm012empbwx5h2btzpl4k9hyciugpgdxgjuw8h&rid=giphy.gif&ct=g"
          alt="gif"
        />
      </div>
    </div>
  );
};

export default ModalGifs;
