import { IconButton, Modal } from "@mui/material";
import React from "react";
import YouTube from "react-youtube";
import "./hero.css";
import { CloseRounded } from "@mui/icons-material";
interface PlaybackModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  link: string;
}

const opts = {
  height: "390",
  width: "500",
  playerVars: {
    autoplay: 1,
  },
};
const PlaybackModal: React.FC<PlaybackModalProps> = ({
  open,
  handleClose,
  title,
  link,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-container">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleClose}
            sx={{ height: 25, width: 25, pl: "1em", alignSelf: "flex-end" }}
          >
            <CloseRounded />
          </IconButton>
          <h1>{title}</h1>
          <YouTube videoId={link} opts={opts} />
        </div>
      </Modal>
    </div>
  );
};

export default PlaybackModal;
