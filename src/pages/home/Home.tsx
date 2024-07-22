import React from "react";

import "./home.css";

import HeroBanner from "../../components/home/HeroBanner";
import MovieShowcase from "../../components/home/carousels/MovieShowcase";
interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home-container">
      <HeroBanner />
      <MovieShowcase />
    </div>
  );
};

export default Home;
