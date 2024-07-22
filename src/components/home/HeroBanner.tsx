import { Button } from "@mui/material";
import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./hero.css";
import PlaybackModal from "./PlaybackModal";
interface HeroBannerProps {}
const HeroBanner: React.FC<HeroBannerProps> = () => {
  const [openPlayback, setOpenPlayback] = useState(false);
  return (
    <div className="hero-banner">
      {openPlayback && (
        <PlaybackModal
          open={openPlayback}
          handleClose={() => setOpenPlayback(false)}
          title="Avengers: Endgame"
          link="TcMBFSGVi1c"
        />
      )}
      <div className="hero-content-container">
        <h1 className="hero-title">Avengers: Endgame</h1>
        <span className="hero-cast">
          Robert Downey Jr.Chris EvansMark Ruffalo
        </span>
        <span
          style={{
            color: "lightgray",
          }}
        >
          After the devastating events of Avengers: Infinity War (2018), <br />
          the universe is in ruins. With the help of remaining allies, <br />
          the Avengers assemble once more in order to reverse Thanos' <br />
          actions and restore balance to the universe
        </span>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#47474b",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setOpenPlayback(true)}
        >
          <PlayArrowIcon />
          <span style={{ marginTop: "2px" }}> Watch Now</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
