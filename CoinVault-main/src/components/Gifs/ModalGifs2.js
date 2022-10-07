import React from "react";
import "../modal.css";

const ModalGifs2 = (props) => {
  if (!props.openModalGif2) return null;

  return (
    <div className="overlayGif">
      <div className="modalContainerGif">
        <img
          onClick={props.handleCloseModalGif2}
          src="https://media0.giphy.com/media/oBQZIgNobc7ewVWvCd/giphy.gif?cid=0dd26108vci3q9sl0mkblz83kjof3zhpxjl9idz68a40ew9n&rid=giphy.gif&ct=g"
          alt="gif"
        />
      </div>
    </div>
  );
};

export default ModalGifs2;
